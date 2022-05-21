// VUE TEST UTILS

import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import TheWelcome from "@/components/TheWelcome.vue";

describe("TheWelcome.vue", () => {
  test("Component renders h1 content", () => {
    // Mount TheWelcome Component
    const wrapper = mount(TheWelcome);

    // Find the h1 tag in the component
    const h1Tag = wrapper.find("h1");

    // Assert the content of the h1 tag
    expect(h1Tag.text()).toBe("Dev Days Vitest!");
  });

  test("Component renders p content", () => {
    /* MAKE THIS A TESTING CHALLENGE */
    const wrapper = mount(TheWelcome);
    const pTag = wrapper.find("p");
    expect(pTag.text()).toBe("can you select me??");
  });

  // A snapshot is a "picture" of what the rendered html looks like
  // a file will be made in the "@/components/__tests__/__snapshots__" directory
  test("Component snapshot", () => {
    const wrapper = mount(TheWelcome);

    // You can write assertions on the entire wrapper!
    expect(wrapper).toMatchSnapshot();
  });

  // More on snapshots
  // When you make a change to the component, you may need to update a snapshot
  // Show how, and explain how to diff
});
