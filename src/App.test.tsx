import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
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
    fireEvent.change($input, {
      target: {
        value: "",
      },
    });

    await waitFor(() => expect($output).toHaveTextContent(""));
  });
  it("松平健", async () => {
    fireEvent.change($input, {
      target: {
        value: "松平 健",
      },
    });

    await waitFor(() => expect($output).toHaveTextContent("ケツダイラ マン"));
  });
  it("草刈正雄", async () => {
    fireEvent.change($input, {
      target: {
        value: "草刈 正雄",
      },
    });

    await waitFor(() => expect($output).toHaveTextContent("マサカリ クサオ"));
  });
});
