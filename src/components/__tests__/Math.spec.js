import { describe, expect, it } from "vitest";

/*
Anatomy of a test

1. Define a test with `it` 
2. Give it a descriptive name
3. Make an "assertion"
*/

it("A Good Name", () => {
  const name = "Tsuki";

  // `.toBe()` is an assertion. There are MANY different assertions.
  expect(name).toBe("Tsuki");
});

// A "describe block" is a collection of connected tests
describe("Math", () => {
  /*
    CHALLENGE 1
    Write the assertion for the test below
  */
  it("2 + 2 = 4", () => {
    // Assertion:
  });

  /* 
  CHALLENGE 2
  Write a test that subtracts 2 numbers
  */
});
