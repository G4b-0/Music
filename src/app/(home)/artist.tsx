import { router } from "expo-router";
import { SectionList, Text } from "react-native";

import { ArrowRight } from "@/assets/svgs/ArrowRight";
import { useArtists } from "@/features/artist/api/getArtists";

import { ActionButton } from "@/components/ui/ActionButton";
import { Spinner } from "@/components/ui/Spinner";
import { trackCountStr } from "@/features/track/utils";

/** @description Screen for `/artist` route. */
export default function ArtistScreen() {
  const { isPending, data } = useArtists();

  return (
    <SectionList
      sections={data ?? []}
      keyExtractor={({ name }) => name}
      renderItem={({ item: { name, numTracks } }) => (
        <ActionButton
          onPress={() => router.navigate(`/artist/${encodeURIComponent(name)}`)}
          textContent={[name, trackCountStr(numTracks)]}
          icon={<ArrowRight size={24} />}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="font-ndot57 text-subtitle text-foreground50">
          {title}
        </Text>
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        isPending ? (
          <Spinner />
        ) : (
          <Text className="mx-auto text-center font-geistMono text-base text-foreground100">
            No Artists Found
          </Text>
        )
      }
      contentContainerClassName="mt-5 w-full gap-2 px-4 pb-16"
    />
  );
}
