// import { it } from "eslint/lib/rule-tester/rule-tester";
import getMin from "./getMin";

it("should", () => {
  const result = getMin([]);
  expect(result).toEqual(null);
});

it("should", () => {
  const result = getMin("");
  expect(result).toEqual(null);
});

it("should", () => {
  const result = getMin([3, -2, 10]);

  expect(result).toEqual(4);
});
