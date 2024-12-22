import {
  capitalizeText,
  getSingularOrPlural,
  mergeClasses,
} from "../../../src/util/styling/styling.utils";
import styles from "./styling-test.module.css";
import { describe, it, expect } from "vitest";

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
});
