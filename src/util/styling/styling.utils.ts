import {
  AlignItemsCSSType,
  AlignItemsCSSValue,
  FlexContainerProps,
  GapCSSType,
  JustifyContentCSSType,
  JustifyContentCSSValue,
  MediaQueryPrefix,
} from "@/components/layout/containers/FlexContainer/FlexContainer";
import { TextAlignment, TextAlignmentType } from "@/types/layout";
import { ValueOf } from "@/types/util";

/**
 * Helper function that merges an unknown amount of classes into a single string. this helps with readability both in code and in the DOM.
 * The classes arg accepts a boolean so that we can
 * @param classes - a list of classes to be merged together
 * @returns a string merging classes together
 */
export const mergeClasses = (...classes: Array<string | boolean>): string => {
  return classes
    .filter((aClass) => typeof aClass === "string" && aClass !== "")
    .join(" ");
};

export const getTextAlignmentClass = (alignment: TextAlignmentType): string => {
  switch (alignment) {
    case TextAlignment.LEFT: {
      return "text-left";
    }
    case TextAlignment.CENTER: {
      return "text-center";
    }
    case TextAlignment.RIGHT:
      return "text-right";
  }
};

export const getJustifyContentClass = (
  val: JustifyContentCSSType,
  responsive?: FlexContainerProps["responsive"]["justifyContent"],
): ValueOf<JustifyContentCSSType> => {
  const justifyTransform = (classToTransform: string | undefined) => {
    let result = "";
    // https://tailwindcss.com/docs/justify-content
    switch (classToTransform) {
      case JustifyContentCSSValue.CENTER:
        result = "justify-center";
        break;
      case JustifyContentCSSValue.END:
        result = "justify-end";
        break;
      case JustifyContentCSSValue.NORMAL:
        result = "justify-normal";
        break;
      case JustifyContentCSSValue.SPACE_AROUND:
        result = "justify-around";
        break;
      case JustifyContentCSSValue.SPACE_BETWEEN:
        result = "justify-between";
        break;
      case JustifyContentCSSValue.SPACE_EVENLY:
        result = "justify-evenly";
        break;
      case JustifyContentCSSValue.START:
        result = "justify-start";
        break;
      case JustifyContentCSSValue.STRETCH:
        result = "justify-stretch";
        break;
    }

    return result;
  };

  const baseClass = justifyTransform(val);
  const responsiveBaseClass = justifyTransform(responsive?.value);

  const responsiveClass = getResponsiveClass(
    responsive?.prefix,
    responsiveBaseClass,
  );

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getAlignItemsClass = (
  val: AlignItemsCSSType,
  responsive?: FlexContainerProps["responsive"]["alignItems"],
): ValueOf<AlignItemsCSSType> => {
  const alignItemsTransform = (
    classToTransform: string | undefined,
  ): string => {
    let result = "";
    switch (classToTransform) {
      case AlignItemsCSSValue.BASELINE:
        result = "items-baseline";
        break;
      case AlignItemsCSSValue.CENTER:
        result = "items-center";
        break;
      case AlignItemsCSSValue.END:
        result = "items-end";
        break;
      case AlignItemsCSSValue.START:
        result = "items-start";
        break;
      case AlignItemsCSSValue.STRETCH:
        result = "items-stretch";
        break;
    }

    return result;
  };

  const baseClass = alignItemsTransform(val);
  const responsiveBaseClass = alignItemsTransform(responsive?.value);

  const responsiveClass = getResponsiveClass(
    responsive?.prefix,
    responsiveBaseClass,
  );

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getFlexFlowClass = (
  val: "row" | "column",
  responsive?: FlexContainerProps["responsive"]["flexFlow"],
) => {
  const baseClass = val === "column" ? "flex-col" : "flex-row";
  const responsiveBaseClass =
    responsive.value === "column" ? "flex-col" : "flex-row";
  const responsiveClass = getResponsiveClass(
    responsive?.prefix,
    responsiveBaseClass,
  );

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getGapClass = (
  val: GapCSSType,
  responsive?:
    | FlexContainerProps["responsive"]["gapX"]
    | FlexContainerProps["responsive"]["gapY"],
) => {
  const baseClass = `gap-${val.direction}-${val.value}`;
  const responsiveBaseClass = `gap-${val?.direction}-${responsive?.value}`;
  const responsiveClass = getResponsiveClass(
    responsive?.prefix,
    responsiveBaseClass,
  );

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getResponsiveClass = (
  prefix?: MediaQueryPrefix,
  responsiveBaseClass?: string,
) => {
  if (!prefix || !responsiveBaseClass) return "";

  const responsiveClass = `${prefix}:${responsiveBaseClass}`;

  return responsiveClass;
};

export const combineBaseAndResponsiveClasses = (
  baseClass: string,
  responsiveClasses: Array<string>,
): string => {
  return `${responsiveClasses.join(" ")} ${baseClass}`.trim();
};

/**
 * Helper function to capitalize each word in a string of text.
 *
 * Examples:
 * 'name' -> 'Name'
 * 'my name' -> 'My Name'
 * @param text - the text we want to capitalize
 * @returns a string of text with each word capitalized
 */
export const capitalizeText = (text: string | null | undefined): string => {
  if (text == null || text === "") return "";

  const words = text.split(" ");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * A helper function to get a singular or plural string based on the amount.
 *
 * Examples:
 * getSingularOrPlural('unit', 2) => 'units'
 * getSingularOrPlural('units', 1) => 'unit'
 *
 * @param text - the text we're going to return as singular or plural
 * @param amount - the amount we want to check against
 * @returns a singular or plural string
 */
export const getSingularOrPlural = (
  text: string,
  amount: number | string,
): string => {
  const parsedAmount = parseInt(amount.toString(), 10);

  if (Number.isNaN(parsedAmount) || parsedAmount < 0) return "";

  let result = text;

  const endsWithS = text.endsWith("s");

  if (parsedAmount === 1) {
    if (endsWithS) {
      result = text.slice(0, text.length - 1);
    }

    return result;
  } else {
    if (!endsWithS) {
      result += "s";
    }

    return result;
  }
};
