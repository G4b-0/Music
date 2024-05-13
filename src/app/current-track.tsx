import { Stack } from "expo-router";
import { useAtomValue } from "jotai";
import { View } from "react-native";

import { isPlayingAtom } from "@/features/playback/api/actions";
import { trackDataAtom, trackListAtom } from "@/features/playback/api/track";

import { AnimatedCover } from "@/components/media/AnimatedCover";
import { Back } from "@/components/navigation/Back";
import { TextLine } from "@/components/ui/Text";
import {
  NextButton,
  PlayToggleButton,
  PreviousButton,
  RepeatButton,
  ShuffleButton,
} from "@/features/playback/components/MediaControls";
import { Timeline } from "@/features/playback/components/Timeline";

/** @description Screen for `/current-track` route. */
export default function CurrentTrackScreen() {
  const trackData = useAtomValue(trackDataAtom);
  const { reference } = useAtomValue(trackListAtom);
  const isPlaying = useAtomValue(isPlayingAtom);

  if (!trackData) return <Back />;

  return (
    <>
      <Stack.Screen options={{ headerTitle: reference?.name ?? "" }} />
      <View className="flex-1 items-center px-4 py-8">
        <AnimatedCover
          placement="bottom"
          source={trackData.artwork}
          delay={300}
          shouldSpin={isPlaying}
        />

        <View className="mt-auto w-full px-4">
          <TextLine
            numberOfLines={2}
            className="text-center font-geistMono text-xl text-foreground50"
          >
            {trackData.name}
          </TextLine>
          <TextLine className="text-center font-geistMonoLight text-base text-accent50">
            {trackData.artistName}
          </TextLine>
        </View>

        <Timeline duration={trackData.duration} />

        <View className="flex-row items-center gap-2 p-8">
          <ShuffleButton size={32} />
          <PreviousButton size={32} />
          <PlayToggleButton size={32} className="px-5" />
          <NextButton size={32} />
          <RepeatButton size={32} />
        </View>
      </View>
    </>
  );
}
