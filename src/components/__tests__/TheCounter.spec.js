import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import TheCounter from "@/components/TheCounter.vue";

describe("TheCounter.vue", () => {
  // You can nest "describe blocks"
  describe("Component renders default content", () => {
    // you can use "test" or "it" from "vitest" - they do the same thing
    test("Test for count initial value", () => {
      const wrapper = mount(TheCounter);

      expect(wrapper.vm.count).toBe(0);
    });

    test("Fresh page snapshot", () => {
      const wrapper = mount(TheCounter);

      expect(wrapper.text()).toMatchSnapshot();
    });
  });

  describe("Counter logic", () => {
    // Tests and describe blocks can be async!
    test("Clicking the add button increments the count by one", async () => {
      const wrapper = mount(TheCounter);

      // check the initial counter value
      expect(wrapper.vm.count).toBe(0);

      // find the button using custom tags
      const addButton = wrapper.find('[data-test="addButton"]');

      // click the button - we want to await this because Vue will need to handle the change
      await addButton.trigger("click");

      // check the new count value
      expect(wrapper.vm.count).toBe(1);

      // clcik the button again
      await addButton.trigger("click");

      // check the value again
      expect(wrapper.vm.count).toBe(2);
    });

    test("Clicking the subtract button decrements the count by one", async () => {
      const wrapper = mount(TheCounter);

      expect(wrapper.vm.count).toBe(0);

      const subtractButton = wrapper.find('[data-test="subtractButton"]');
      await subtractButton.trigger("click");

      expect(wrapper.vm.count).toBe(-1);

      await subtractButton.trigger("click");

      expect(wrapper.vm.count).toBe(-2);
    });
  });
});
