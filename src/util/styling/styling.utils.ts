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
  const responsivePrefix = responsive ? responsive + ":" : "";

  // https://tailwindcss.com/docs/justify-content
  switch (val) {
    case JustifyContentCSSValue.CENTER:
      return `${responsivePrefix}justify-center`;
    case JustifyContentCSSValue.END:
      return `${responsivePrefix}justify-end`;
    case JustifyContentCSSValue.NORMAL:
      return `${responsivePrefix}justify-normal`;
    case JustifyContentCSSValue.SPACE_AROUND:
      return `${responsivePrefix}justify-around`;
    case JustifyContentCSSValue.SPACE_BETWEEN:
      return `${responsivePrefix}justify-between`;
    case JustifyContentCSSValue.SPACE_EVENLY:
      return `${responsivePrefix}justify-evenly`;
    case JustifyContentCSSValue.START:
      return `${responsivePrefix}justify-start`;
    case JustifyContentCSSValue.STRETCH:
      return `${responsivePrefix}justify-stretch`;
  }
};

export const getAlignItemsClass = (
  val: AlignItemsCSSType,
  responsive?: FlexContainerProps["responsive"]["alignItems"],
): ValueOf<AlignItemsCSSType> => {
  const responsivePrefix = responsive ? responsive + ":" : "";

  // https://tailwindcss.com/docs/align-items
  switch (val) {
    case AlignItemsCSSValue.BASELINE:
      return `${responsivePrefix}items-baseline`;
    case AlignItemsCSSValue.CENTER:
      return `${responsivePrefix}items-center`;
    case AlignItemsCSSValue.END:
      return `${responsivePrefix}items-end`;
    case AlignItemsCSSValue.START:
      return `${responsivePrefix}items-start`;
    case AlignItemsCSSValue.STRETCH:
      return `${responsivePrefix}items-stretch`;
  }
};

export const getGapClass = (
  val: GapCSSType,
  responsive?:
    | FlexContainerProps["responsive"]["gapX"]
    | FlexContainerProps["responsive"]["gapY"],
) => {
  // TODO: clean this up, apply to all other fns
  const responsiveClass = responsive
    ? responsive.prefix + ":" + "gap-" + val.direction + "-" + responsive.value
    : "";

  return `${responsiveClass} gap-${val.direction}-${val.value}`;
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
