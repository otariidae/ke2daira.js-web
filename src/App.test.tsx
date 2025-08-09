import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("ke2daira");

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
