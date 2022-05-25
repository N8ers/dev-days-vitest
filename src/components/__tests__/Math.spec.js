import { describe, expect, it } from "vitest";

// You can interact with functions outside of the test
function sum(a, b) {
  return a + b;
}

// A "describe block" is a collection of connected tests
describe("Math", () => {
  it("Test Sum function", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
