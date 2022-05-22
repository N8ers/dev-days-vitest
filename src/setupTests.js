import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

// Mocked Response
const mockGet = {
  message: "hi",
};

export const restHandlers = [
  rest.get("http://localhost:5050", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockGet));
  }),
];

const server = setupServer(...restHandlers);

// Start mock server before all tests run
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test
afterEach(() => server.resetHandlers());
