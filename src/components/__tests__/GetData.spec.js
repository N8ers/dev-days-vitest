import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import GetData from "@/components/GetData.vue";

describe("GetData.vue", () => {
  test("Message renders when network request is successful", async () => {
    // verify initial apiResult state
    // simulate click
    // flush promises
    // find networkResponseArea (maybe flush promises again)
    // check vm apiResults
    // snapshot
  });

  test("Error renders when network request fails", async () => {
    /* Research Item */
    /* How to mock different responses w/ msw */
    /* Overrider with  server.use() */
    /* https://github.com/mswjs/msw/discussions/885 */
  });
});
