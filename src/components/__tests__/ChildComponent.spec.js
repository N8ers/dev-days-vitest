import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {
    test("Fresh page snapshot", () => {
      // snapshot test
    });
  });

  describe("Component handles props", () => {
    test("Component handles default 'message' prop", () => {
      // check default message prop
      // find p tag and check the message
    });

    test("Component handles defined 'message' prop", () => {
      // set the props on a wrapper
      // check vm message value
      // find ptag
      // check text of ptag
    });
  });

  describe("Component handles emits", () => {
    test("component handles 'emitMessageUp' emit", async () => {
      // find input
      // simulate user input
      // click submit button
      // check different aspects of the emit
    });
  });
});
