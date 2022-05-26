import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import axios from "axios";

import GetData from "@/components/GetData.vue";

vi.mock("axios");
axios.get = vi.fn().mockImplementation(() => Promise.resolve({ data: "hi" }));

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    const wrapper = mount(GetData);
    const button = wrapper.find("button");
    await button.trigger("click");

    await flushPromises();

    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );

    await flushPromises();

    expect(networkResponseArea.text()).toBe("Response: hi");
  });

  // test("Error renders when network request fails", async () => {
  //   const wrapper = mount(GetData);
  //   const button = wrapper.find("button");
  //   await button.trigger("click");

  //   await flushPromises();
  //   await flushPromises();

  //   const networkResponseArea = wrapper.find(
  //     '[data-test="networkResponseArea"]'
  //   );

  //   await flushPromises();
  //   await flushPromises();

  //   expect(networkResponseArea.text()).toBe("Response: An error occured");
  // });
});
