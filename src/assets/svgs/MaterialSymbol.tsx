import Svg, { Path } from "react-native-svg";

import { Colors } from "@/constants/Styles";

/*
  Material Symbols Icons on Google Fonts:
    - 200 Weight, -25 Grade, 24 Optical Size, Rounded
*/

export function AlbumOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M479.96-344.31q57.04 0 96.69-39.32 39.66-39.32 39.66-96.37 0-57.31-39.54-96.81t-96.91-39.5q-56.94 0-96.25 39.75-39.3 39.75-39.3 96.62 0 57.03 39.31 96.33t96.34 39.3Zm.09-96.31q-16.71 0-28.07-11.3-11.36-11.31-11.36-28.03 0-16.71 11.3-28.07 11.31-11.36 28.03-11.36 16.71 0 28.07 11.3 11.36 11.31 11.36 28.03 0 16.71-11.3 28.07-11.31 11.36-28.03 11.36Zm.13 314.47q-73.39 0-138.06-27.89t-112.51-75.69q-47.84-47.81-75.65-112.29-27.81-64.48-27.81-137.8 0-73.39 27.89-138.06t75.69-112.51q47.81-47.84 112.29-75.65 64.48-27.81 137.8-27.81 73.39 0 138.06 27.89t112.51 75.69q47.84 47.8 75.65 112.29 27.81 64.48 27.81 137.8 0 73.39-27.89 138.06t-75.69 112.51q-47.8 47.84-112.29 75.65-64.48 27.81-137.8 27.81Zm-.21-36.93q132.3 0 224.63-92.3 92.32-92.3 92.32-224.59 0-132.3-92.3-224.63-92.3-92.32-224.59-92.32-132.3 0-224.63 92.3-92.32 92.3-92.32 224.59 0 132.3 92.3 224.63 92.3 92.32 224.59 92.32ZM480-480Z" />
    </Svg>
  );
}

export function ArtistOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M698.15-223.38q-32.3 0-54.92-22.54-22.61-22.54-22.61-55.17 0-32.64 22.52-55.31 22.52-22.68 55.63-22.68 13.35 0 24.19 3.81 10.85 3.81 19.81 11.89v-168.49q0-12.63 8.98-21.61 8.98-8.98 21.98-8.98h52.92q11.66 0 20.35 8.57 8.69 8.56 8.69 20.47 0 12.04-8.69 20.73-8.69 8.69-20.35 8.69h-51.57v203.03q0 32.42-22.31 55-22.31 22.59-54.62 22.59Zm-522.27 0q-13 0-21.98-8.99-8.98-8.98-8.98-21.98v-31.26q0-23.89 13.89-44.78 13.88-20.88 38.11-32.53 56.43-27.2 111.63-40.39 55.21-13.19 110.83-13.19 27.46 0 51.92 3.02 24.47 3.02 48.58 8.4 9.23 2.33 12.25 8.15 3.02 5.82 1.79 12.61-1.11 6.37-6.07 10.71-4.97 4.34-12.47 3.15-22.11-4.5-46.98-6.81-24.86-2.31-49.02-2.31-52.65 0-103.8 12.4-51.15 12.39-100.93 36.37Q199-323.12 190.42-311q-8.57 12.11-8.57 25.46v25.23h323.5q9.13 0 13.7 5.59 4.57 5.59 4.57 12.29 0 7.47-4.57 13.26t-13.7 5.79H175.88ZM419.38-504q-48.38 0-82.65-34.27t-34.27-82.65q0-48.39 34.27-82.66 34.27-34.27 82.65-34.27 48.39 0 82.66 34.27 34.27 34.27 34.27 82.66 0 48.38-34.27 82.65T419.38-504Zm0-36.92q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 360.61Z" />
    </Svg>
  );
}

export function DeleteOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M306.46-166.15q-25.45 0-43.49-18.05-18.05-18.05-18.05-43.49v-490.46h-20.73q-7.77 0-13.21-5.45-5.44-5.45-5.44-13.04 0-7.59 5.44-13.01 5.44-5.43 13.21-5.43h137.04v-.5q0-11.65 8.69-20.34 8.7-8.7 20.73-8.7h179.7q11.65 0 20.34 8.7 8.69 8.69 8.69 20.34v.5h137.59q7.22 0 12.66 5.48 5.45 5.48 5.45 12.82 0 7.78-5.47 13.2-5.48 5.43-12.8 5.43h-21.12v490.46q0 25.44-18.04 43.49-18.05 18.05-43.5 18.05H306.46Zm372.31-552H281.85v490.46q0 10.77 6.92 17.69 6.92 6.92 17.69 6.92h347.69q10.77 0 17.7-6.92 6.92-6.92 6.92-17.69v-490.46Zm-264.9 435.8q7.42 0 12.93-5.25t5.51-13.02v-320q0-7.76-5.48-13.21-5.48-5.44-12.82-5.44-7.78 0-13.2 5.44-5.43 5.45-5.43 13.21v320q0 7.77 5.54 13.02 5.53 5.25 12.95 5.25Zm132.93 0q7.42 0 12.92-5.25 5.51-5.25 5.51-13.02v-320q0-7.76-5.48-13.21-5.48-5.44-12.82-5.44-7.78 0-13.2 5.44-5.42 5.45-5.42 13.21v320q0 7.77 5.53 13.02 5.54 5.25 12.96 5.25Zm-264.95-435.8V-203.08-718.15Z" />
    </Svg>
  );
}

export function FavoriteOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M479.23-202.27q-11.19 0-21.94-3.98-10.75-3.98-18.94-12.06l-42.23-38.27q-108.39-97.73-189.18-188.77-80.79-91.03-80.79-188.2 0-74.4 50.66-124.96 50.65-50.57 125.19-50.57 42.53 0 89.53 22.06 47.01 22.06 88.47 84.1 42.08-62.04 88.71-84.1 46.63-22.06 89.55-22.06 74.36 0 124.98 50.57 50.61 50.56 50.61 124.96 0 99.47-84.39 192.11-84.38 92.63-185.58 184.48l-42.67 38.69q-8.52 8.04-19.65 12.02-11.14 3.98-22.33 3.98Zm-17.26-461.06q-33.85-58.32-73.8-83.57-39.94-25.25-86.48-25.25-59.4 0-99.01 39.44-39.6 39.44-39.6 99.09 0 44 24.77 90.23 24.77 46.24 66.42 94.58 41.65 48.35 95.92 99.25 54.27 50.91 113.66 104.48 6.92 6.16 16.15 6.16 9.23 0 16.15-6.16 59.39-53.57 113.66-104.48 54.27-50.9 95.92-99.25 41.65-48.34 66.42-94.58 24.77-46.23 24.77-90.23 0-59.65-39.6-99.09-39.61-39.44-99.01-39.44-46.54 0-86.54 25.25-40 25.25-73.86 83.57-3.14 5.48-8.02 7.93-4.88 2.44-9.94 2.44-5.07 0-10.23-2.44-5.17-2.45-7.75-7.93ZM480-504.58Z" />
    </Svg>
  );
}

export function FavoriteFilled({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M479.23-202.27q-11.19 0-21.94-3.98-10.75-3.98-18.94-12.06l-42.23-38.27q-108.39-97.73-189.18-188.77-80.79-91.03-80.79-188.2 0-74.39 50.62-124.96 50.62-50.57 125.08-50.57 42.68 0 89.68 22.06 47.01 22.06 88.47 84.1 42.08-62.04 88.74-84.1 46.66-22.06 89.52-22.06 74.36 0 124.97 50.57 50.62 50.57 50.62 124.96 0 99.47-84.39 192.11-84.38 92.63-185.58 184.48l-42.67 38.69q-8.52 8.04-19.65 12.02-11.14 3.98-22.33 3.98Z" />
    </Svg>
  );
}

export function FolderOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M187.52-206.15q-25.77 0-43.57-17.8t-17.8-43.64v-424.82q0-25.84 17.8-43.64t43.74-17.8h199.23l76.93 76.93h308.63q25.77 0 43.57 17.8t17.8 43.74v347.69q0 25.94-17.8 43.74t-43.57 17.8H187.52Zm.17-36.93h584.62q10.77 0 17.69-6.92 6.92-6.92 6.92-17.69v-347.69q0-10.77-6.92-17.7-6.92-6.92-17.69-6.92H449l-76.92-76.92H187.69q-10.77 0-17.69 6.92-6.92 6.92-6.92 17.69v424.62q0 10.77 6.92 17.69 6.92 6.92 17.69 6.92Zm-24.61 0V-716.92-243.08Z" />
    </Svg>
  );
}

export function HideImageOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M794.46-732.92v423.69q0 9.13-5.73 13.7-5.73 4.57-12.29 4.57-7.32 0-13.11-4.54-5.79-4.54-5.79-13.85v-423.57q0-9.23-7.69-16.93-7.7-7.69-16.93-7.69H307.85q-9.14 0-13.71-5.76-4.56-5.75-4.56-12.89 0-6.81 4.56-12.54 4.57-5.73 13.71-5.73h425.07q25.94 0 43.74 17.8t17.8 43.74ZM227.08-165.54q-25.94 0-43.74-17.8t-17.8-43.56v-514.52l-63.5-63.5q-5.62-5.23-5.75-12.6-.14-7.36 6-13.75 5.75-6 12.79-6 7.04 0 13.3 5.88l702.96 703.34q5.16 5.17 5.54 12.59.39 7.42-5.5 13.31-5.88 5.88-12.92 5.88t-12.92-5.88l-63.39-63.39H227.08ZM604.9-301.85H335.88q-9.32 0-13.6-8.32-4.28-8.33 2.2-16.36l43.59-58.07q4.97-6.09 11.99-6.09 7.03 0 11.94 5.19l56.46 67.65 62.54-78-308.54-308.53v477.3q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69h477.3l-99.48-99.39Zm-70.36-232.69Zm-81 81Z" />
    </Svg>
  );
}

export function ImageOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M226.89-165.54q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.55v-506.22q0-25.75 17.8-43.55 17.8-17.8 43.55-17.8h506.22q25.75 0 43.55 17.8 17.8 17.8 17.8 43.55v506.22q0 25.75-17.8 43.55-17.8 17.8-43.55 17.8H226.89Zm.19-36.92h505.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-505.84q0-9.23-7.69-16.93-7.7-7.69-16.93-7.69H227.08q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v505.84q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69Zm-24.62 0V-757.54-202.46Zm133.42-99.39h295.08q9.5 0 13.66-8.32 4.15-8.33-1.12-16.38l-79.29-105.91q-4.94-6.04-12.35-6.04-7.41 0-12.32 5.96l-91.08 114.69-56.43-67.56q-4.91-5.28-11.94-5.28-7.03 0-11.94 5.96l-43.67 58.2q-6.48 8.03-2.2 16.36 4.28 8.32 13.6 8.32Z" />
    </Svg>
  );
}

export function LibraryMusicFilled({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M485.85-372.31q33.04 0 55.6-22.61Q564-417.54 564-449.85v-228h77.73q11.77 0 20.71-8.55 8.94-8.56 8.94-21.48 0-11.77-8.94-20.72-8.94-8.94-20.71-8.94h-77.85q-12.15 0-21.09 8.94-8.94 8.95-8.94 20.72v201.42q-10.01-10.77-21.97-16.16-11.96-5.38-26.03-5.38-33.05 0-55.6 22.67-22.56 22.68-22.56 55.36t22.56 55.17q22.55 22.49 55.6 22.49ZM321.54-280q-25.94 0-43.74-17.8T260-341.54v-430.77q0-25.94 17.8-43.74t43.74-17.8h430.77q25.94 0 43.74 17.8t17.8 43.74v430.77q0 25.94-17.8 43.74T752.31-280H321.54ZM207.69-166.15q-25.94 0-43.74-17.8t-17.8-43.74v-449.43q0-7.42 5.43-12.84 5.42-5.42 13.23-5.42 7.42 0 12.84 5.42 5.43 5.42 5.43 12.84v449.43q0 9.23 7.69 16.92 7.69 7.69 16.92 7.69h449.43q7.42 0 12.84 5.43 5.42 5.42 5.42 12.84 0 7.81-5.42 13.23-5.42 5.43-12.84 5.43H207.69Z" />
    </Svg>
  );
}

export function ListOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M326.77-591.08q-7.77 0-13.02-5.53-5.25-5.54-5.25-12.96 0-7.42 5.25-12.92Q319-628 326.77-628h448.81q7.32 0 12.8 5.48 5.47 5.48 5.47 12.82 0 7.78-5.47 13.2-5.48 5.42-12.8 5.42H326.77Zm0 129.23q-7.77 0-13.02-5.53t-5.25-12.95q0-7.42 5.25-12.93t13.02-5.51h448.81q7.32 0 12.8 5.48 5.47 5.48 5.47 12.82 0 7.78-5.47 13.2-5.48 5.42-12.8 5.42H326.77Zm0 129.23q-7.77 0-13.02-5.53t-5.25-12.95q0-7.42 5.25-12.93t13.02-5.51h448.81q7.32 0 12.8 5.48 5.47 5.48 5.47 12.82 0 7.78-5.47 13.2-5.48 5.42-12.8 5.42H326.77ZM189.5-586.46q-9.31 0-16.33-6.99-7.02-6.99-7.02-16.86 0-9.71 7.06-16.01 7.06-6.3 16.37-6.3 9.8 0 16.57 6.33t6.77 15.79q0 10.06-6.81 17.05t-16.61 6.99Zm0 128.46q-9.31 0-16.33-6.83-7.02-6.82-7.02-16.29 0-10.61 7.06-17.13t16.37-6.52q9.8 0 16.57 6.52t6.77 17.33q0 9.32-6.81 16.12-6.81 6.8-16.61 6.8Zm.04 130.12q-9.29 0-16.34-6.8-7.05-6.8-7.05-16.67 0-10.21 7.06-16.76 7.06-6.54 16.37-6.54 9.8 0 16.57 6.57 6.77 6.58 6.77 16.54 0 10.06-6.8 16.86-6.79 6.8-16.58 6.8Z" />
    </Svg>
  );
}

export function MatchCaseOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="m248.69-393.54-36.73 105.77q-2.34 5.77-6.56 8.77-4.21 3-10.48 3-9.8 0-15.07-7.85-5.27-7.84-1.58-16.92l133.19-365.69q2.46-5.89 7.37-9.19 4.9-3.31 10.79-3.31h13.69q6 0 10.96 3.31 4.96 3.3 7.42 9.19l135.39 364.54q3.3 9.46-2.46 17.69-5.77 8.23-15.47 8.23-6.27 0-11.5-3.5t-7.19-9.77l-36.38-104.27H248.69Zm13.04-33.73h150.35l-74-209.54h-1.96l-74.39 209.54Zm382.08 160.62q-45.43 0-73.31-26.02-27.88-26.02-27.88-64.25 0-42.96 33.03-68.14 33.04-25.17 86-25.17 20.23 0 42.23 4.69 22 4.69 38.89 12.58v-26q0-39-19.42-59.06-19.43-20.06-57.27-20.06-17.16 0-33.25 5.52-16.1 5.52-30.14 14.64-6.61 4.77-12.67 2.59-6.06-2.17-9.87-7.86-3.8-5.31-3.09-11.83.71-6.52 7.86-11.06 18.2-12.15 39.46-17.8 21.27-5.66 43.04-5.66 54.5 0 81.98 29.12 27.48 29.11 27.48 85.61v161.62q0 7.38-4.96 12.29-4.96 4.9-11.96 4.9-7.38 0-12.29-4.96-4.9-4.96-4.9-11.96v-23.93h-3.5q-17.46 25.7-40.12 37.95-22.65 12.25-55.34 12.25Zm2.27-30.62q41.15 0 68.98-29.94 27.82-29.94 27.82-75.71-14.38-8-35.61-12.5-21.23-4.5-42.27-4.5-40.08 0-63.33 15.92t-23.25 46.46q0 25.73 18.45 43 18.44 17.27 49.21 17.27Z" />
    </Svg>
  );
}

export function OpenInNewOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M226.89-165.54q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.55v-506.22q0-25.75 17.8-43.55 17.8-17.8 43.68-17.8h220.36v36.92h-220.3q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v505.84q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69h505.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-220.3h36.92v220.36q0 25.88-17.8 43.68t-43.55 17.8H226.89Zm163.76-198.77-26.34-26.34 367.27-366.89h-176.5v-36.92h239.38v239.38h-36.92v-176.5L390.65-364.31Z" />
    </Svg>
  );
}

export function PlaylistAddOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M163.58-342.46q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.23 0-7.4 5.45-12.82 5.44-5.42 13.21-5.42h243.07q7.39 0 12.83 5.45t5.44 12.84q0 7.78-5.44 13.21-5.44 5.42-12.83 5.42H163.58Zm0-158.77q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.23 0-7.4 5.45-12.82 5.44-5.42 13.21-5.42h401.23q7.38 0 12.82 5.45 5.45 5.45 5.45 12.84 0 7.78-5.45 13.21-5.44 5.42-12.82 5.42H163.58Zm0-158.15q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.24 0-7.39 5.45-12.81 5.44-5.43 13.21-5.43h401.23q7.38 0 12.82 5.45 5.45 5.45 5.45 12.85 0 7.78-5.45 13.2-5.44 5.43-12.82 5.43H163.58Zm515.05 475.07q-7.78 0-13.21-5.44-5.42-5.44-5.42-13.21v-139.5H520.5q-7.77 0-13.21-5.45-5.44-5.45-5.44-13.23 0-7.4 5.44-12.82t13.21-5.42H660v-140.5q0-7.39 5.45-12.83t13.23-5.44q7.4 0 12.82 5.44t5.42 12.83v140.5h140.5q7.39 0 12.83 5.45t5.44 12.84q0 7.78-5.44 13.21-5.44 5.42-12.83 5.42h-140.5v139.5q0 7.77-5.45 13.21-5.45 5.44-12.84 5.44Z" />
    </Svg>
  );
}

export function QueueMusicOutline({
  size,
  color = Colors.foreground50,
}: {
  size: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M630.01-206.15q-38.28 0-65.14-26.65Q538-259.45 538-297.67q0-38.86 26.99-65.98 27-27.12 65.2-27.12 14.98 0 29.21 5.79 14.22 5.79 26.29 15.4v-276.27q0-11.75 8.33-19.87 8.33-8.13 20.01-8.13h91.94q11.68 0 19.78 8.13 8.1 8.13 8.1 19.89 0 11.75-8.13 19.93-8.12 8.17-19.87 8.17h-83.23v320.15q0 38.08-27.08 64.75-27.07 26.68-65.53 26.68Zm-445.2-172.31q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.04 0-7.59 5.45-13.01 5.44-5.42 13.21-5.42h242.15q7.33 0 12.8 5.47 5.47 5.48 5.47 12.82 0 7.78-5.47 13.21-5.47 5.42-12.8 5.42H184.81Zm0-129.23q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.04 0-7.59 5.45-13.01 5.44-5.43 13.21-5.43h390.31q7.32 0 12.79 5.48 5.47 5.48 5.47 12.82 0 7.78-5.47 13.2-5.47 5.43-12.79 5.43H184.81Zm0-129.23q-7.77 0-13.21-5.45-5.45-5.45-5.45-13.04 0-7.59 5.45-13.01 5.44-5.43 13.21-5.43h390.31q7.32 0 12.79 5.48 5.47 5.48 5.47 12.82 0 7.78-5.47 13.2-5.47 5.43-12.79 5.43H184.81Z" />
    </Svg>
  );
}
