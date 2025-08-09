import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rs, describe, it } from "@rstest/core";
import App from "./App";

rs.mock("ke2daira", () => import("../__mocks__/ke2daira"));

describe("ke2daira", () => {
  it("松平健", async () => {
    render(<App />);
    const $input = screen.getByPlaceholderText("例：松平 健");

    await userEvent.type($input, "松平 健");

    await screen.findByText("ケツダイラ マン");
  });
  it("草刈正雄", async () => {
    render(<App />);
    const $input = screen.getByPlaceholderText("例：松平 健");

    await userEvent.type($input, "草刈 正雄");

    await screen.findByText("マサカリ クサオ");
  });
});
