import { expect, test } from "@rstest/playwright";

test.describe("production build (dist)", () => {
  test("renders UI and does not throw uncaught JS errors", async ({
    page,
    serve,
  }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (err) => {
      jsErrors.push(err.message);
    });
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        jsErrors.push(`console: ${msg.text()}`);
      }
    });

    const { url } = await serve("./dist/index.html");
    await page.goto(url, { waitUntil: "domcontentloaded" });

    await expect(
      page.getByRole("heading", { name: "ke2daira.js" }),
    ).toBeVisible();
    await expect(page.getByPlaceholder("例：松平 健")).toBeVisible();

    expect(jsErrors, jsErrors.join("\n")).toEqual([]);
  });

  test("converts a known name after kuromoji finishes loading", async ({
    page,
    serve,
  }) => {
    const { url } = await serve("./dist/index.html");
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.getByPlaceholder("例：松平 健").fill("松平 健");
    await expect(page.locator("output")).toContainText("ケツダイラ マン", {
      timeout: 60_000,
    });
  });
});
