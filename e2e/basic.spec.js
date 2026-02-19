// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect a title "to contain" a substring.
  // Note: Adjust the expected title based on actual index.html
  await expect(page).toHaveTitle(/Vite/);
});

test("hero section is visible", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Check if the main heading is visible
  await expect(page.getByText("MOJITO")).toBeVisible();
});
