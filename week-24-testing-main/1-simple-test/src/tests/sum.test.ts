import { describe, expect, it, test } from "@jest/globals";
import { multiply, sum } from "../index";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  // it("should sum 1 and 2", () => {
  //   const finalAnswer = sum(1, 2);
  //   expect(finalAnswer).toBe(3);
  // });

  it("should return the sum of negative numbers correctly", () => {
    const finalAnswer = sum(-1, -2);
    expect(finalAnswer).toBe(-3);
  });
});

describe("Testing multiply function", () => {
  it("should multiply 1 and 2 correctly", () => {
    const finalAnswer = multiply(1, 2);
    expect(finalAnswer).toBe(2);
  });
});
