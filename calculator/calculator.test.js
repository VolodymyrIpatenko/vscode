// import { it } from "eslint/lib/rule-tester/rule-tester";
// import { it } from "eslint/lib/rule-tester/rule-tester";
import calc from "./calculator";

it("check operator +", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3");
});

it("check operator -", () => {
  const result = calc("2 - 1");
  expect(result).toEqual("2 - 1 = 1");
});

it("check operator -", () => {
  const result = calc("2 * 1");
  expect(result).toEqual("2 * 1 = 2");
});

it("check operator -", () => {
  const result = calc("2 / 2");
  expect(result).toEqual("2 / 2 = 1");
});
