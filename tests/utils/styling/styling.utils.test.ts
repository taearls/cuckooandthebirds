import { describe, expect, it } from "vitest";

import { JustifyContentCSSValue } from "../../../src/components/layout/containers/FlexContainer/FlexContainer";
import {
  capitalizeText,
  getJustifyContentClass,
  getSingularOrPlural,
  mergeClasses,
} from "../../../src/util/styling/styling.utils";
// @ts-expect-error css module import should work but it doesn't here for some annoying reason
import styles from "./styling-test.module.css";

describe("Styling util testing", () => {
  describe("mergeClasses", () => {
    it("will merge classes together", () => {
      const input = ["class1", "class2", "class3"];

      const actual = mergeClasses(...input);

      const expected = "class1 class2 class3";

      expect(actual).toEqual(expected);
    });

    it("will merge classes together from a CSS module", () => {
      const input = [
        styles["test-class1"],
        styles["test-class2"],
        styles["test-class3"],
      ];

      const actual = mergeClasses(...input);

      const expected = "test-class1 test-class2 test-class3";

      // we don't know what the class name hash would be.
      // if the expected name is in the actual string, that's fine.
      expected
        .split(" ")
        .forEach((className) => expect(actual).toMatch(className));
    });

    it("will merge classes together and filter out classes which dont match a condition", () => {
      // eslint-disable-next-line no-constant-binary-expression
      const input = ["class1", false && "class2", "class3"];

      const actual = mergeClasses(...input);

      const expected = "class1 class3";

      expect(actual).toEqual(expected);
    });

    it("will merge classes together and filter out classes which are empty strings", () => {
      const input = ["class1", "", "", "", "class2", "class3"];

      const actual = mergeClasses(...input);

      const expected = "class1 class2 class3";

      expect(actual).toEqual(expected);
    });

    it("will merge classes together and not filter out classes which match a condition", () => {
      // eslint-disable-next-line no-constant-binary-expression
      const input = ["class1", true && "class2", "class3"];

      const actual = mergeClasses(...input);

      const expected = "class1 class2 class3";

      expect(actual).toEqual(expected);
    });

    it("will return an empty string if an empty list of classes is passed", () => {
      const input = "";

      const actual = mergeClasses(input);

      const expected = "";

      expect(actual).toEqual(expected);
    });
  });

  describe("capitalizeText", () => {
    it("will capitalize multiple words", () => {
      const input = "lowercased title";

      const actual = capitalizeText(input);

      const expected = "Lowercased Title";

      expect(actual).toEqual(expected);
    });

    it("will capitalize a single letter", () => {
      const input = "l";

      const actual = capitalizeText(input);

      const expected = "L";

      expect(actual).toEqual(expected);
    });

    it("will return an empty string if one is passed", () => {
      const input = "";

      const actual = capitalizeText(input);

      const expected = "";

      expect(actual).toEqual(expected);
    });
  });

  describe("getSingularOrPlural", () => {
    it("will return a singular unit if amount is 1", () => {
      const unit = "unit";

      const units = "units";

      const amount = 1;

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = unit;

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });

    it("will return a plural unit if amount is 0", () => {
      const unit = "unit";

      const units = "units";

      const amount = 0;

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = units;

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });

    it("will return a plural unit if amount is > 1", () => {
      const unit = "unit";

      const units = "units";

      const amount = 2;

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = units;

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });

    it("will return an empty string if amount is < 0", () => {
      const unit = "unit";

      const units = "units";

      const amount = -1;

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = "";

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });

    it("will parse amounts as strings", () => {
      const unit = "unit";

      const units = "units";

      const amount = "4";

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = units;

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });

    it("will parse return an empty string if amount string is NaN", () => {
      const unit = "unit";

      const units = "units";

      const amount = "not a number";

      const actualUnit = getSingularOrPlural(unit, amount);

      const actualUnits = getSingularOrPlural(units, amount);

      const expected = "";

      expect(actualUnit).toEqual(expected);

      expect(actualUnits).toEqual(expected);
    });
  });

  describe("getJustifyContentClass", () => {
    describe("non-responsive classes", () => {
      const inputs = Object.entries(JustifyContentCSSValue);

      const expectedValues = [
        "justify-center",
        "justify-end",
        "justify-normal",
        "justify-around",
        "justify-between",
        "justify-evenly",
        "justify-start",
        "justify-stretch",
      ];

      for (let i = 0; i < inputs.length; i++) {
        const [name, input] = inputs[i];

        it(`will transform JustifyContentCSSValue.${name} into the correct justify content class`, () => {
          const actual = getJustifyContentClass(input);

          const expected = expectedValues[i];

          expect(actual).toEqual(expected);
        });
      }
    });

    describe("responsive classes", () => {
      const inputs = Object.entries(JustifyContentCSSValue);
      const responsivePrefixes = ["sm", "md", "lg", "xl", "2xl"];

      const expectedValues = [
        "justify-center",
        "justify-end",
        "justify-normal",
        "justify-around",
        "justify-between",
        "justify-evenly",
        "justify-start",
        "justify-stretch",
      ];

      for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < responsivePrefixes.length; j++) {
          const [name, input] = inputs[i];
          const prefix = responsivePrefixes[j];

          it(`will transform JustifyContentCSSValue.${name} with prefix ${prefix} into the correct justify content class`, () => {
            const actual = getJustifyContentClass(input, {
              prefix,
              value: input,
            });

            const expected = `${prefix}:${expectedValues[i]} ${expectedValues[i]}`;

            expect(actual).toEqual(expected);
          });
        }
      }
    });
  });
});
