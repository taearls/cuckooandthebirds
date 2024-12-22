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
