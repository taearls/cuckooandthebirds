import {
  getAlignItemsClass,
  getFlexFlowClass,
  getGapClass,
  getJustifyContentClass,
  mergeClasses,
} from "@/util/styling/styling.utils";
import { ReactElement } from "react";

export const JustifyContentCSSValue = {
  CENTER: "center",
  END: "flex-end",
  NORMAL: "normal",
  SPACE_AROUND: "space-around",
  SPACE_BETWEEN: "space-between",
  SPACE_EVENLY: "space-evenly",
  START: "flex-start",
  STRETCH: "stretch",
} as const satisfies Record<string, string>;

export const AlignItemsCSSValue = {
  BASELINE: "baseline",
  CENTER: "center",
  END: "end",
  START: "start",
  STRETCH: "stretch",
} as const satisfies Record<string, string>;

export type GapCSSType = {
  direction: "x" | "y";
  // https://github.com/microsoft/TypeScript/issues/54925
  value?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export type JustifyContentCSSType =
  (typeof JustifyContentCSSValue)[keyof typeof JustifyContentCSSValue];

export type AlignItemsCSSType =
  (typeof AlignItemsCSSValue)[keyof typeof AlignItemsCSSValue];

// https://tailwindcss.com/docs/responsive-design
export type MediaQueryPrefix = "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveValue<T> = { prefix: MediaQueryPrefix; value: T };

export type FlexContainerProps = {
  flexFlow?: "row" | "column";
  responsive?: {
    flexFlow?: Array<ResponsiveValue<"row" | "column">>;
    gapX?: Array<ResponsiveValue<GapCSSType["value"]>>;
    gapY?: Array<ResponsiveValue<GapCSSType["value"]>>;
    justifyContent?: Array<ResponsiveValue<JustifyContentCSSType>>;
    alignItems?: Array<ResponsiveValue<AlignItemsCSSType>>;
  };
  id?: string;
  gapX?: GapCSSType["value"];
  gapY?: GapCSSType["value"];
  justifyContent?: JustifyContentCSSType;
  alignItems?: AlignItemsCSSType;
  children: ReactElement | ReactElement[];
};

export default function FlexContainer({
  flexFlow,
  responsive,
  id,
  gapX,
  gapY,
  justifyContent,
  alignItems,
  children,
}: FlexContainerProps) {
  const flexFlowClass = getFlexFlowClass(flexFlow, responsive?.flexFlow);
  const justifyContentClass = getJustifyContentClass(
    justifyContent,
    responsive?.justifyContent,
  );
  const alignItemsClass = getAlignItemsClass(
    alignItems,
    responsive?.alignItems,
  );
  const gapXClass = getGapClass(
    {
      direction: "x",
      value: gapX,
    },
    responsive?.gapX,
  );
  const gapYClass = getGapClass(
    {
      direction: "y",
      value: gapY,
    },
    responsive?.gapY,
  );

  return (
    <div
      id={id}
      className={mergeClasses(
        "flex",
        flexFlowClass,
        justifyContentClass && justifyContentClass.toString(),
        alignItemsClass && alignItemsClass.toString(),
        gapXClass,
        gapYClass,
      )}
    >
      {children}
    </div>
  );
}
