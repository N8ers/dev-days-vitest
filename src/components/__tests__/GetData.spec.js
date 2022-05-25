import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";

import GetData from "@/components/GetData.vue";

//////////////////////////////////////////////////////////////////
// These tests fail intermittently.                             //
// It probably has to do with the beforeAll/afterEach/afterAll. //
//////////////////////////////////////////////////////////////////

const server = setupServer(
  rest.get("http://localhost:5050", (req, res, ctx) => {
    return res(ctx.status(200), ctx.body({ message: "hi" }));
  })
);

beforeAll(() => {
  return server.listen();
});
afterEach(() => {
  return server.resetHandlers();
});
afterAll(() => {
  return server.close();
});

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    server.use(
      rest.get("http://localhost:5050", (req, res, ctx) => {
        return res(ctx.status(200), ctx.body({ message: "hi" }));
      })
    );

    const wrapper = mount(GetData);
    await wrapper.find("button").trigger("click");
    await flushPromises();
    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );
    await flushPromises();

    expect(networkResponseArea.text()).toBe("Response: hi");
  });

  test("Error renders when network request fails", async () => {
    server.use(
      rest.get("http://localhost:5050", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const wrapper = mount(GetData);
    await wrapper.find("button").trigger("click");
    await flushPromises();
    const networkResponseArea = wrapper.find(
      '[data-test="networkResponseArea"]'
    );
    await flushPromises();

    expect(networkResponseArea.text()).toBe(
      "ERROR: AxiosError: Request failed with status code 500"
    );
  });
});
