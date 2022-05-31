// const { it } = require("eslint/lib/rule-tester/rule-tester");

// const { it } = require("eslint/lib/rule-tester/rule-tester");
// import { it } from "eslint/lib/rule-tester/rule-tester";
import getSum, { getSquaredNumbers, getOddNumbers } from "./calculator";

it("should square numbers", () => {
  const result = getSquaredNumbers([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it("should get odd off numbers", () => {
  const result = getOddNumbers([1, 2, 3]);

  expect(result).toEqual([1, 3]);
});

it("should get sum of numbers", () => {
  const result = getSum(1, 3);

  expect(result).toEqual(4);
});
