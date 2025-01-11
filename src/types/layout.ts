export const TextAlignment = {
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right",
} as const;

export type TextAlignmentType =
  (typeof TextAlignment)[keyof typeof TextAlignment];
