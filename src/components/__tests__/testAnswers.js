////////////////////////
// TheWelcome.spec.js //
////////////////////////

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
    expect(wrapper.html()).toMatchSnapshot();
  });

  // More on snapshots
  // When you make a change to the component, you may need to update a snapshot
  // Show how, and explain how to diff
});

////////////////////////
// TheCounter.spec.js //
////////////////////////

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

///////////////////////
// TheParent.spec.js //
///////////////////////

import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ParentComponent from "@/components/ParentComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {
    test("Renders default content", () => {
      const wrapper = mount(ParentComponent);

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

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
      await childComponent.vm.$emit("emitMessageUp", "a chill message");
      // check that the emit was received
      expect(wrapper.vm.childComponentMessage).toBe("a chill message");
      // check that the template renders `v-if`
      // await flushPromises();
      const childComponentMessage = wrapper.find(
        '[data-test="childComponentMessage"]'
      );
      expect(childComponentMessage.exists()).toBe(true);
      expect(childComponentMessage.text()).toBe(
        "Child Compoent Message: a chill message"
      );
    });
  });
});

//////////////////////
// TheChild.spec.js //
//////////////////////

import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ChildComponent from "@/components/ChildComponent.vue";

describe("ChildComponent.vue", () => {
  describe("Renders content on load", () => {
    test("Fresh page snapshot", () => {
      const wrapper = mount(ChildComponent);
      expect(wrapper.html()).toMatchSnapshot();
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

/////////////////////
// GetData.spec.js //
/////////////////////

import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import GetData from "@/components/GetData.vue";

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    const wrapper = mount(GetData);

    // verify initial state
    expect(wrapper.vm.apiResult).toMatchObject({
      response: null,
      error: null,
    });

    await wrapper.find("button").trigger("click");

    await flushPromises();

    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );

    await flushPromises();

    expect(networkResponseArea.text()).toEqual(
      'Response: {\n  "message": "hi"\n}'
    );

    expect(wrapper.vm.apiResult).toMatchObject({
      response: { message: "hi" },
      error: null,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Error renders when network request fails", async () => {
    /* Research Item */
    /* How to mock different responses w/ msw */
    /* Overrider with  server.use() */
    /* https://github.com/mswjs/msw/discussions/885 */
  });
});
