export type Theme = {
  background: ColorVariant;
  text: ColorVariant;
  font: string;
};

export interface ColorVariant {
  NORMAL: string;
  EMPHASIS: string;
  SUCCESS: string;
  ERROR: string;
  WARNING: string;
}

export interface FontVariant {
  FONTFAMILY: string;
  size: SizeVariant;
}

export interface SizeVariant {
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  "2XL": string;
}

export const getThemeColor = () => {
  return {
    emphasis: "text-red-600",
    normal: "white",
  };
};
