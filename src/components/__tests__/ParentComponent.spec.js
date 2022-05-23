import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ParentComponent from "@/components/ParentComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {
    test("Renders default content", () => {
      // snapshot test
    });
  });

  describe("Component conditionally renders 'childComponentMessage'", () => {
    test("Triggering emit from ChildComponent renders 'childComponentMessage'", async () => {
      // check that the childComponentMessage is not rendered
      // find child & emit
      // check emit value
      // makesure childComponentMessage exists
      // check the childComponentMessage text value
    });
  });
});
