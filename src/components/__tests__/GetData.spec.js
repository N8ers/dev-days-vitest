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
