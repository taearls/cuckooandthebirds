import {
  AlignItemsCSSType,
  AlignItemsCSSValue,
  FlexContainerProps,
  GapCSSType,
  JustifyContentCSSType,
  JustifyContentCSSValue,
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
  val?: JustifyContentCSSType,
  responsive?: FlexContainerProps["responsive"]["justifyContent"],
): ValueOf<JustifyContentCSSType> => {
  let baseClass = "";

  // https://tailwindcss.com/docs/justify-content
  switch (val) {
    case JustifyContentCSSValue.CENTER:
      baseClass = "justify-center";
      break;
    case JustifyContentCSSValue.END:
      baseClass = "justify-end";
      break;
    case JustifyContentCSSValue.NORMAL:
      baseClass = "justify-normal";
      break;
    case JustifyContentCSSValue.SPACE_AROUND:
      baseClass = "justify-around";
      break;
    case JustifyContentCSSValue.SPACE_BETWEEN:
      baseClass = "justify-between";
      break;
    case JustifyContentCSSValue.SPACE_EVENLY:
      baseClass = "justify-evenly";
      break;
    case JustifyContentCSSValue.START:
      baseClass = "justify-start";
      break;
    case JustifyContentCSSValue.STRETCH:
      baseClass = "justify-stretch";
      break;
  }

  const responsiveClass = getResponsiveClass(baseClass, responsive, val);

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getAlignItemsClass = (
  val?: AlignItemsCSSType,
  responsive?: FlexContainerProps["responsive"]["alignItems"],
): ValueOf<AlignItemsCSSType> => {
  let baseClass = "";

  // https://tailwindcss.com/docs/align-items
  switch (val) {
    case AlignItemsCSSValue.BASELINE:
      baseClass = "items-baseline";
      break;
    case AlignItemsCSSValue.CENTER:
      baseClass = "items-center";
      break;
    case AlignItemsCSSValue.END:
      baseClass = "items-end";
      break;
    case AlignItemsCSSValue.START:
      baseClass = "items-start";
      break;
    case AlignItemsCSSValue.STRETCH:
      baseClass = "items-stretch";
      break;
  }

  const responsiveClass = getResponsiveClass(baseClass, responsive, val);

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getFlexFlowClass = (
  val?: "row" | "column",
  responsive?: FlexContainerProps["responsive"]["flexFlow"],
) => {
  const baseClass = val === "column" ? "flex-col" : "flex-row";
  const valToReplace = val === "column" ? "col" : "row";
  const responsiveClass = getResponsiveClass(
    baseClass,
    responsive,
    valToReplace,
  );

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getGapClass = (
  val: GapCSSType,
  responsive?:
    | FlexContainerProps["responsive"]["gapX"]
    | FlexContainerProps["responsive"]["gapY"],
) => {
  if (val.value == null && responsive == null) return "";

  const baseClass = `gap-${val.direction}-${val.value || responsive.value}`;
  const responsiveClass = getResponsiveClass(baseClass, responsive, val.value);

  return combineBaseAndResponsiveClasses(baseClass, [responsiveClass]);
};

export const getResponsiveClass = (
  baseClass: string,
  val?: FlexContainerProps["responsive"][keyof FlexContainerProps["responsive"]],
  valToReplace?:
    | GapCSSType["value"]
    | AlignItemsCSSType
    | JustifyContentCSSType
    | "row"
    | "col",
) => {
  if (val == null) return "";

  let responsiveBaseClass = baseClass;
  if (
    Boolean(valToReplace) &&
    Boolean(val?.value) &&
    !baseClass.includes(val.value.toString())
  ) {
    responsiveBaseClass = baseClass.replace(
      valToReplace.toString(),
      val.value.toString(),
    );
  }

  const responsiveClass = `${val.prefix}:${responsiveBaseClass}`;

  return responsiveClass;
};

export const combineBaseAndResponsiveClasses = (
  baseClass: string,
  responsiveClasses: Array<string>,
): string => {
  return `${baseClass} ${responsiveClasses.join(" ")}`.trim();
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
