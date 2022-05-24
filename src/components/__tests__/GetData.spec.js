import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";

import GetData from "@/components/GetData.vue";

const server = setupServer(
  rest.get("http://localhost:5050", (req, res, ctx) => {
    console.log("SERVER CALLED");
    return res(ctx.status(200), ctx.body({ message: "hi" }));
  })
);

beforeAll(() => {
  console.log("beforeAll in test");
  return server.listen();
});
afterEach(() => {
  console.log("afterEach in test");
  return server.resetHandlers();
});
afterAll(() => {
  console.log("afterAll in test");
  return server.close();
});

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    /*
    // Method 1) Set the server up in the test - pretty verbose, but no magic
    */
    // const server = setupServer(
    //   rest.get("http://localhost:5050", (req, res, ctx) => {
    //     return res(ctx.status(200), ctx.body({ message: "hi" }));
    //   })
    // );
    // server.listen();

    // This is technically being mocked by the setup server above

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
    /*
    // Method 2) Setup server outside of test & overwrite where nessessary - not so bad
    */
    server.use(
      rest.get("http://localhost:5050", (req, res, ctx) => {
        console.log("SERVER USE");
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
    await flushPromises();

    expect(networkResponseArea.text()).toBe(
      "ERROR: AxiosError: Request failed with status code 500"
    );
  });
});
