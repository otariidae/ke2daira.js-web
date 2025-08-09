import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rs, describe, it, expect, afterEach, beforeEach } from "@rstest/core";
import App from "./App";

rs.mock("ke2daira", () => import("../__mocks__/ke2daira"));

afterEach(cleanup);

describe("ke2daira", () => {
  let $input: HTMLInputElement;
  let $output: HTMLOutputElement;
  beforeEach(() => {
    const { getByTestId } = render(<App />);
    $input = getByTestId("name-input") as HTMLInputElement;
    $output = getByTestId("ke2daira-output") as HTMLOutputElement;
  });

  it("empty", async () => {
    await waitFor(() => expect($output).toHaveTextContent(""));
  });
  it("松平健", async () => {
    await userEvent.type($input, "松平 健");

    await waitFor(() => expect($output).toHaveTextContent("ケツダイラ マン"));
  });
  it("草刈正雄", async () => {
    await userEvent.type($input, "草刈 正雄");

    await waitFor(() => expect($output).toHaveTextContent("マサカリ クサオ"));
  });
});
