import { test, expect } from "@playwright/test";

test.describe("ProjectCard", () => {
  // Before each test, login and navigate to projects page
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*projects/);
  });

  test.describe("Rendering", () => {
    test("project cards are visible on the projects page", async ({ page }) => {
      // Expect at least one project card to be visible
      const projectCards = page.locator('div.w-\\[400px\\]');
      await expect(projectCards).toBeDefined();
      const count = await projectCards.count();
      expect(count).toBeGreaterThan(0);
    });

    test("project card title is visible and has green color applied", async ({
      page,
    }) => {
      // Get the first h2 (project title) in the first project card
      const firstTitle = page.locator("h2").first();
      await expect(firstTitle).toBeVisible();

      // Verify the title has the green color CSS variable applied
      // Check for the style attribute containing the color property
      const titleElement = page.locator("h2").first();
      const computedColor = await titleElement.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });

      // The computed color should be the resolved value of var(--Green500)
      // which is #2abb7f in the app.css, converting to rgb(42, 187, 127)
      expect(computedColor).toBe("rgb(42, 187, 127)");
    });

    test("project card description is visible and has red color applied", async ({
      page,
    }) => {
      // Get the first h3 (project description) in the first project card
      const firstDescription = page.locator("h3").first();
      await expect(firstDescription).toBeVisible();

      // Verify the description has the red color applied (#ff0000)
      await expect(firstDescription).toHaveCSS("color", "rgb(255, 0, 0)");
    });

    test("project card image is visible", async ({ page }) => {
      // Get the first image element in the card
      const image = page.locator('img[alt="Project"]').first();
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute("width", "90px");
      await expect(image).toHaveAttribute("height", "104px");
    });
  });

  test.describe("Props Surface", () => {
    test("default project (JIRA Clone) has delete button disabled", async ({
      page,
    }) => {
      // Find the project card containing "JIRA Clone"
      const jiraCloneCard = page.locator("h2", { hasText: "JIRA Clone" }).first();
      await expect(jiraCloneCard).toBeVisible();

      // Get the parent card and find the delete button within it
      const card = jiraCloneCard.locator("..").locator("..").locator("..");
      const deleteButton = card
        .locator("button")
        .filter({ hasText: "Delete project" });

      // Verify the delete button is disabled
      await expect(deleteButton).toBeDisabled();
    });

    test("non-default project (Second project) has delete button enabled", async ({
      page,
    }) => {
      // Find the project card containing "Second project"
      const secondProjectCard = page
        .locator("h2", { hasText: "Second project" })
        .first();
      await expect(secondProjectCard).toBeVisible();

      // Get the parent card and find the delete button within it
      const card = secondProjectCard.locator("..").locator("..").locator("..");
      const deleteButton = card
        .locator("button")
        .filter({ hasText: "Delete project" });

      // Verify the delete button is enabled
      await expect(deleteButton).toBeEnabled();
    });

    test("clicking on a project card navigates to that project", async ({
      page,
    }) => {
      // Find the second project card (non-default) and click the link
      const projectLink = page.locator("a").filter({ hasText: "Second project" }).first();
      await expect(projectLink).toBeVisible();

      // Click the link
      await projectLink.click();

      // Verify navigation to the project's board
      await expect(page).toHaveURL(/.*second-project/);
    });

    test("JIRA Clone project card is clickable and navigates to project", async ({
      page,
    }) => {
      // Find the JIRA Clone project card and click the link
      const projectLink = page.locator("a").filter({ hasText: "JIRA Clone" }).first();
      await expect(projectLink).toBeVisible();

      // Click the link
      await projectLink.click();

      // Verify navigation to the JIRA Clone project
      await expect(page).toHaveURL(/.*jira-clone/);
    });
  });

  test.describe("Delete Button Interactions", () => {
    test("delete button for default project shows tooltip on hover", async ({
      page,
    }) => {
      // Find the delete button for JIRA Clone (default project)
      const jiraCloneCard = page.locator("h2", { hasText: "JIRA Clone" }).first();
      const card = jiraCloneCard.locator("..").locator("..").locator("..");
      const deleteButton = card
        .locator("button")
        .filter({ hasText: "Delete project" });

      // Verify the button has the correct title attribute for tooltip
      await expect(deleteButton).toHaveAttribute(
        "title",
        "Cannot delete default project"
      );
    });

    test("delete button for non-default project shows tooltip on hover", async ({
      page,
    }) => {
      // Find the delete button for Second project (non-default)
      const secondProjectCard = page
        .locator("h2", { hasText: "Second project" })
        .first();
      const card = secondProjectCard.locator("..").locator("..").locator("..");
      const deleteButton = card
        .locator("button")
        .filter({ hasText: "Delete project" });

      // Verify the button has the correct title attribute for tooltip
      await expect(deleteButton).toHaveAttribute("title", "Delete project");
    });
  });

  test.describe("Multiple Project Cards", () => {
    test("all project cards have proper structure", async ({ page }) => {
      // Get all project card containers
      const projectCards = page.locator('div.w-\\[400px\\]');
      const count = await projectCards.count();

      // Iterate through each card and verify structure
      for (let i = 0; i < count; i++) {
        const card = projectCards.nth(i);

        // Each card should have a link
        const link = card.locator("a").first();
        await expect(link).toBeVisible();

        // Each card should have a title (h2)
        const title = link.locator("h2").first();
        await expect(title).toBeVisible();

        // Each card should have a description (h3)
        const description = link.locator("h3").first();
        await expect(description).toBeVisible();

        // Each card should have an image
        const image = link.locator('img[alt="Project"]').first();
        await expect(image).toBeVisible();

        // Each card should have a delete button
        const deleteButton = card
          .locator("button")
          .filter({ hasText: "Delete project" });
        await expect(deleteButton).toBeDefined();
      }
    });
  });
});
