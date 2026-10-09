import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/register");
  await expect(page).toHaveTitle(/Jira clone - Create your account/);
});

test("page renders", async ({ page }) => {
  await page.goto("/register");
  await expect(page.getByRole("heading", { name: "Create your account" })).toBeVisible();
});
