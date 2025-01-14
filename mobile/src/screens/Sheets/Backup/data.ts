import { toast } from "@backpackapp-io/react-native-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { and, eq, isNull } from "drizzle-orm";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { db } from "@/db";
import type { TrackWithAlbum } from "@/db/schema";
import { albums, playlists, tracks } from "@/db/schema";
import { sanitizePlaylistName } from "@/db/utils";

import i18next from "@/modules/i18n";
import { getAlbums } from "@/api/album";
import { createPlaylist, getPlaylists, updatePlaylist } from "@/api/playlist";
import { addToPlaylist, getTracks } from "@/api/track";
import { Resynchronize, musicStore } from "@/modules/media/services/Music";

import { clearAllQueries } from "@/lib/react-query";
import { ToastOptions } from "@/lib/toast";
import { pickKeys } from "@/utils/object";
import { isFulfilled } from "@/utils/promise";
import type { Maybe } from "@/utils/types";

const SAF = FileSystem.StorageAccessFramework;

//#region Schemas
const RawAlbum = z.object({
  name: z.string().trim().min(1),
  artistName: z.string().trim().min(1),
});

const RawTrack = z.object({
  /** @deprecated Not used due to the file id changing per device. */
  id: z.string().trim().min(1),
  name: z.string().trim().min(1),
  artistName: z.string().trim().min(1).nullish(),
  albumName: z.string().trim().min(1).nullish(),
});

const MusicBackup = z.object({
  favorites: z.object({
    albums: RawAlbum.array(),
    playlists: z.string().transform(sanitizePlaylistName).array(),
    tracks: RawTrack.array(),
  }),
  playlists: z
    .object({
      name: z.string().transform(sanitizePlaylistName),
      tracks: RawTrack.array(),
    })
    .array(),
});
//#endregion

//#region Helpers
/**
 * Returns the id of the album from the specified parameters. Throws error
 * if no album found with specified parameters.
 *
 * Doesn't work correctly for "collaboration" albums.
 */
async function getAlbumId<T extends Maybe<string>>(
  albumName: T,
  artistName: T,
) {
  if (!albumName || !artistName) return undefined;
  return (
    await db.query.albums.findFirst({
      where: (fields, { and, eq }) =>
        and(eq(fields.name, albumName), eq(fields.artistName, artistName)),
    })
  )?.id;
}

function getRawTrack({ id, name, artistName, album }: TrackWithAlbum) {
  return { id, name, artistName, albumName: album?.name };
}
//#endregion

//#region Export
async function exportBackup() {
  // Get favorited values.
  const [favAlbums, favPlaylists, favTracks] = await Promise.all([
    getAlbums([eq(albums.isFavorite, true)]),
    getPlaylists([eq(playlists.isFavorite, true)]),
    getTracks([eq(tracks.isFavorite, true)]),
  ]);
  // Get all user-generated playlists.
  const allPlaylists = await getPlaylists();

  // User selects accessible location inside the "Download" directory to
  // save this backup file.
  const downloadDir = SAF.getUriForDirectoryInRoot("Download");
  const perms = await SAF.requestDirectoryPermissionsAsync(downloadDir);
  if (!perms.granted) throw new Error(i18next.t("response.actionCancel"));

  // Create a new file in specified directory & write contents.
  const fileUri = await SAF.createFileAsync(
    ...[perms.directoryUri, "music_backup", "application/json"],
  );
  await SAF.writeAsStringAsync(
    fileUri,
    JSON.stringify({
      favorites: {
        playlists: favPlaylists.map(({ name }) => name),
        albums: favAlbums.map((al) => pickKeys(al, ["name", "artistName"])),
        tracks: favTracks.map(getRawTrack),
      },
      playlists: allPlaylists.map(({ name, tracks }) => {
        return { name, tracks: tracks.map(getRawTrack) };
      }),
    }),
    { encoding: FileSystem.EncodingType.UTF8 },
  );
}
//#endregion

//#region Import
async function importBackup() {
  // Select the `music_backup.json` file we'll be importing from.
  const { assets, canceled } = await DocumentPicker.getDocumentAsync({
    type: ["application/json", "application/octet-stream"],
  });
  if (canceled) throw new Error(i18next.t("response.actionCancel"));
  const document = assets[0];
  if (!document) throw new Error(i18next.t("response.noSelect"));

  // Read, parse, and validate file contents.
  const docContents = await FileSystem.readAsStringAsync(document.uri);
  let backupContents;
  try {
    // Validate the data structure.
    backupContents = MusicBackup.parse(JSON.parse(docContents));
  } catch (err) {
    // Delete cached file before throwing a more readable error.
    await FileSystem.deleteAsync(document.uri);
    throw new Error(i18next.t("response.invalidStructure"));
  }

  // Import playlists.
  await Promise.allSettled(
    backupContents.playlists.map(async ({ name, tracks: plTracks }) => {
      // Create playlist if it doesn't exist.
      await createPlaylist({ name });

      // Get all the ids of the tracks in this playlist.
      const _trackIds = await Promise.allSettled(
        plTracks.map(async (t) => {
          const albumId = await getAlbumId(t.albumName, t.artistName);
          const track = await db.query.tracks.findFirst({
            where: (fields, { and, eq, isNull }) =>
              and(
                eq(fields.name, t.name),
                t.artistName
                  ? eq(fields.artistName, t.artistName)
                  : isNull(fields.artistName),
                albumId ? eq(fields.albumId, albumId) : undefined,
              ),
          });
          if (!track) throw new Error("Track not found.");
          return track.id;
        }),
      );
      const trackIds = _trackIds.filter(isFulfilled).map((t) => t.value);

      // Create relations between tracks & playlist.
      await Promise.allSettled(
        trackIds.map((trackId) =>
          addToPlaylist({ trackId, playlistName: name }),
        ),
      );
    }),
  );

  // Import favorite media.
  await Promise.allSettled([
    // Playlists
    ...backupContents.favorites.playlists.map((name) =>
      updatePlaylist(name, { isFavorite: true }),
    ),
    // Albums
    ...backupContents.favorites.albums.map(({ name, artistName }) =>
      db
        .update(albums)
        .set({ isFavorite: true })
        .where(and(eq(albums.name, name), eq(albums.artistName, artistName))),
    ),
    // Tracks
    ...backupContents.favorites.tracks.map(async (t) => {
      const albumId = await getAlbumId(t.albumName, t.artistName);
      return db
        .update(tracks)
        .set({ isFavorite: true })
        .where(
          and(
            eq(tracks.name, t.name),
            t.artistName
              ? eq(tracks.artistName, t.artistName)
              : isNull(tracks.artistName),
            albumId ? eq(tracks.albumId, albumId) : undefined,
          ),
        );
    }),
  ]);

  // Delete the cached document.
  await FileSystem.deleteAsync(document.uri);

  const currPlayingFrom = musicStore.getState().playingSource;
  if (currPlayingFrom) await Resynchronize.onTracks(currPlayingFrom);
}
//#endregion

//#region Mutation Hooks
export const useExportBackup = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: exportBackup,
    onSuccess: () => {
      toast(t("response.exportSuccess"), ToastOptions);
    },
    onError: (err) => {
      toast.error(err.message, ToastOptions);
    },
  });
};

export const useImportBackup = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: importBackup,
    onSuccess: () => {
      clearAllQueries(queryClient);
      toast(t("response.importSuccess"), ToastOptions);
    },
    onError: (err) => {
      toast.error(err.message, ToastOptions);
    },
  });
};
//#endregion
