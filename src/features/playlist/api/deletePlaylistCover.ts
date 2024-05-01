import { useMutation, useQueryClient } from "@tanstack/react-query";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { playlists } from "@/db/schema";
import { favoriteKeys } from "@/api/favorites/_queryKeys";
import { playlistKeys } from "@/api/playlists/_queryKeys";

import { deleteFile } from "@/lib/file-system";

async function deletePlaylistCover(playlistName: string) {
  const exists = await db.query.playlists.findFirst({
    where: (fields, { eq }) => eq(fields.name, playlistName),
  });
  if (!exists) throw new Error("Playlist doesn't exist.");
  await deleteFile(exists.coverSrc);

  await db
    .update(playlists)
    .set({ coverSrc: null })
    .where(eq(playlists.name, playlistName));
}

/** @description Removes the cover of an existing playlist. */
export function useDeletePlaylistCover(playlistName: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deletePlaylistCover(playlistName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: playlistKeys.all });
      queryClient.invalidateQueries({ queryKey: favoriteKeys.lists() });
    },
  });
}
