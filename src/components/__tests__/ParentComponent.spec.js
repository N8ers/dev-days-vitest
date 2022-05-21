import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ParentComponent from "@/components/ParentComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {});

  describe("Component conditionally renders 'childComponentMessage'", () => {
    test("Triggering emit from ChildComponent renders 'childComponentMessage'", async () => {
      const wrapper = mount(ParentComponent);

      // content should be hidden until emit
      expect(wrapper.find('[data-test="childComponentMessage"]').exists()).toBe(
        false
      );
      // default message is empty
      expect(wrapper.vm.childComponentMessage).toBe("");

      const childComponent = wrapper.findComponent(ChildComponent);

      // simulate an emit from ChildComponent
      await childComponent.vm.$emit("handleEmitMessageUp", "a chill message");

      // check that the emit was received
      expect(wrapper.vm.childComponentMessage).toBe("");

      // check that the template renders `v-if`

      // const childComponentMessage = wrapper.find(
      //   '[data-test="childComponentMessage"]'
      // );

      // expect(childComponentMessage.exists()).toBe(true);
      // expect(childComponentMessage.text()).toBe("a chill message");
    });
  });
});
