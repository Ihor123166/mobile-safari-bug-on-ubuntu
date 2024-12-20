import { test, expect } from "@playwright/test";

test("Fail on click() on mobile safari ubuntu", async ({ page }) => {
  await page.goto("https://www.spoonflower.com/");
  await page.getByRole("button", { name: "Accept All" }).click();
  await page.getByRole("combobox", { name: "Search" }).click();
  await page
    .getByRole("combobox", { name: "Search" })
    .pressSequentially("cats");

  // fail here
  await page.getByRole("link", { name: "cats in Wallpaper" }).click();

  await expect(page.getByRole("button", { name: "Clear All" })).toBeVisible({
    timeout: 30000,
  });
});
