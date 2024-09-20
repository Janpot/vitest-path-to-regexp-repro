/**
 * @vitest-environment jsdom
 */

import * as React from "react";
import { test, vi } from "vitest";
import { render } from "@testing-library/react";
import Foo from "./Foo";

vi.mock("./bar", () => {
  return {
    message: () => "Goodbye",
  };
});

test("Foo", async () => {
  render(<Foo />);
});
