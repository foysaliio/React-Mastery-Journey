import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { describe, expect, it } from "vitest";

import Counter from "./Counter";

describe("Counter", () => {
  it("renders the initial count", () => {
    render(<Counter />);

    expect(
      screen.getByRole("heading", {
        name: "Count: 0",
      }),
    ).toBeInTheDocument();
  });

  it("increments when the user clicks", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", {
        name: "Increment",
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Count: 1",
      }),
    ).toBeInTheDocument();
  });
});
