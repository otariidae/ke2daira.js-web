import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rs, describe, it, expect } from "@rstest/core";
import App from "./App";

rs.mock("ke2daira", () => import("../__mocks__/ke2daira"));

describe("ke2daira", () => {
  it("empty", async () => {
    render(<App />);
    const $output = screen.getByTestId("ke2daira-output");

    await waitFor(() => expect($output).toHaveTextContent(""));
  });
  it("松平健", async () => {
    render(<App />);
    const $input = screen.getByTestId("name-input");
    const $output = screen.getByTestId("ke2daira-output");

    await userEvent.type($input, "松平 健");

    await waitFor(() => expect($output).toHaveTextContent("ケツダイラ マン"));
  });
  it("草刈正雄", async () => {
    render(<App />);
    const $input = screen.getByTestId("name-input");
    const $output = screen.getByTestId("ke2daira-output");

    await userEvent.type($input, "草刈 正雄");

    await waitFor(() => expect($output).toHaveTextContent("マサカリ クサオ"));
  });
});
