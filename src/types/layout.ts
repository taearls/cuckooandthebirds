export const TextAlignment = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

export type TextAlignmentType =
  (typeof TextAlignment)[keyof typeof TextAlignment];
