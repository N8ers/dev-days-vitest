import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import TheWelcome from "@/components/TheWelcome.vue";

describe("TheWelcome.vue", () => {
  test("Component renders h1 content", () => {
    // find the h1 tag and check the text value
  });

  test("Component renders p content", () => {
    // find the p tag and check the text value
  });

  // A snapshot is a "picture" of what the rendered html looks like
  // a file will be made in the "@/components/__tests__/__snapshots__" directory
  test("Component snapshot", () => {
    // You can write assertions on the entire wrapper!
    // snapshot the value
  });

  // More on snapshots
  // When you make a change to the component, you may need to update a snapshot
  // Show how, and explain how to diff
});
