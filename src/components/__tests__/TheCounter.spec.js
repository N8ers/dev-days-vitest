import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import TheCounter from "@/components/TheCounter.vue";

describe("TheCounter.vue", () => {
  // You can nest "describe blocks"
  describe("Component renders default content", () => {
    // you can use "test" or "it" from "vitest" - they do the same thing
    test("Test for count initial value", () => {
      // check for initial value using wrapper.vm
    });

    test("Fresh page snapshot", () => {
      // check for snapshot
    });
  });

  describe("Counter logic", () => {
    // Tests and describe blocks can be async!
    test("Clicking the add button increments the count by one", async () => {
      // check that increment works
    });

    test("Clicking the subtract button decrements the count by one", async () => {
      // check that decrement works
    });
  });
});
