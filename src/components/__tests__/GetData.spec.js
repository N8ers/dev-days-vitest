import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";

import GetData from "@/components/GetData.vue";

//////////////////////////////////////////////////////////////////
// These tests fail intermittently.                             //
// It probably has to do with the beforeAll/afterEach/afterAll. //
//////////////////////////////////////////////////////////////////

export const restHandlers = [
  rest.get("http://localhost:5050", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "hi" }));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
//  Close server after all tests
afterAll(() => server.close());
// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    // server.use(
    //   rest.get("http://localhost:5050", (req, res, ctx) => {
    //     return res(ctx.status(200), ctx.body({ message: "hi" }));
    //   })
    // );

    await flushPromises();
    await flushPromises();
    await flushPromises();

    const wrapper = mount(GetData);
    const button = wrapper.find("button");
    await button.trigger("click");

    await flushPromises();
    await flushPromises();
    await flushPromises();
    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );

    await flushPromises();
    await flushPromises();
    await flushPromises();

    expect(networkResponseArea.text()).toBe("Response: hi");
  });

  test("Error renders when network request fails", async () => {
    server.use(
      rest.get("http://localhost:5050", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await flushPromises();
    await flushPromises();
    await flushPromises();

    const wrapper = mount(GetData);
    const button = wrapper.find("button");
    await button.trigger("click");
    await flushPromises();
    await flushPromises();
    await flushPromises();

    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );

    await flushPromises();
    await flushPromises();
    await flushPromises();

    expect(networkResponseArea.text()).toBe(
      "ERROR: AxiosError: Request failed with status code 500"
    );
  });
});
