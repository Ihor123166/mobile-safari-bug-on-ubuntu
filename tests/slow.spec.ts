import { test, expect } from "@playwright/test";

test("Work slow on mobile safari ubuntu", async ({ page }) => {
  await page.request.patch(
    "https://www.spoonflower.com/api-gateway/alpenrose/user/me/preferences"
  );
  const cartLink = "https://cart.spoonflower.com";
  await page.request.get(cartLink + "/api/spoonflower/who-am-i");
  await page.request.post(cartLink + "/api/spoonflower/add-to-cart", {
    data: {
      fabric: "WALLPAPER_PEEL_AND_STICK",
      fabric_size: "WALLPAPER_IMPERIAL_ROLL_2_x_3",
      design_id: 15622273,
      quantity: 1,
    },
  });

  // test is slow on that page
  await page.goto(cartLink);
  await page.getByRole("button", { name: "Accept All" }).click();

  const priceLocator = page.getByTestId("cart-item-price-regular");
  await expect(priceLocator).toContainText("$39.00");
  await page.getByLabel("Increment").click();
  await expect(priceLocator).toContainText("$78.00");
});
