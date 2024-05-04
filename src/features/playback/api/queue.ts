import { atom } from "jotai";
import { unwrap } from "jotai/utils";

import { createAtomWithStorage } from "@/lib/jotai";

/** @description [🇫🇴🇷 🇮🇳🇹🇪🇷🇳🇦🇱 🇺🇸🇪 🇴🇳🇱🇾] */
export const queueListAsyncAtom = createAtomWithStorage<string[]>(
  "queue-list",
  [],
);
/** @description List of track ids we want to play after the current track. */
export const queueListAtom = unwrap(queueListAsyncAtom, (prev) => prev ?? []);

/** @description Add a track to the end of the queue. */
export const queuePushAtom = atom(null, async (get, set, trackId: string) => {
  set(queueListAsyncAtom, [...(await get(queueListAsyncAtom)), trackId]);
});

/** @description Remove the track at the specific index in the queue. */
export const queueRemoveAtIdxAtom = atom(
  null,
  async (get, set, idx: number) => {
    set(
      queueListAsyncAtom,
      (await get(queueListAsyncAtom)).filter((_, i) => i !== idx),
    );
  },
);
