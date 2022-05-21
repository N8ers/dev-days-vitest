import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {
    test("Fresh page snapshot", () => {
      // NATHAN - go through and make sure all the snaps make sense and it's how vitest recomends
      // const wrapper = mount(ChildComponent)
      // expect(wrapper).toMatchSnapshot()
    });
  });

  describe("Component handles props", () => {
    test("Component handles default 'message' prop", () => {
      const wrapper = mount(ChildComponent);

      expect(wrapper.vm.message).toBe("I am the default message");

      const pTag = wrapper.find("p");
      expect(pTag.text()).toBe("I am the default message");
    });

    test("Component handles defined 'message' prop", () => {
      const wrapper = mount(ChildComponent, {
        props: {
          message: "I am a message from the parent!",
        },
      });

      expect(wrapper.vm.message).toBe("I am a message from the parent!");

      const pTag = wrapper.find("p");
      expect(pTag.text()).toBe("I am a message from the parent!");
    });
  });

  describe("Component handles emits", () => {
    test("component handles 'emitMessageUp' emit", async () => {
      const wrapper = mount(ChildComponent);

      // Find input
      const textInput = wrapper.find("input");

      // Simulating typing into the input
      textInput.element.value = "A nice message :)";
      textInput.trigger("input");

      // click the button to emit - you can find and click something all at once
      await wrapper.find("button").trigger("click");

      // assert that emit fired
      expect(wrapper.emitted().emitMessageUp).toBeTruthy();

      // assert number of times the emit occured
      expect(wrapper.emitted().emitMessageUp.length).toBe(1);

      // assert the value the the emit sent
      expect(wrapper.emitted().emitMessageUp[0]).toEqual(["A nice message :)"]);

      // you can get a list of emits that happened on the component with `emittedByOrder()`
      // const orderedEmitEvents = wrapper.emittedByOrder();
    });
  });
});
