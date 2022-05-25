import { expect, it } from "vitest";

/*
Anatomy of a test

1. Define a test with `it` 
2. Give it a descriptive name
3. Make an "assertion"
*/

it("Make sure name is 'Tsuki'", () => {
  const name = "Tsuki";
  expect(name).toBe("Tsuki");
});
