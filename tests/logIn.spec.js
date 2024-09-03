import { test, expect } from "@playwright/test";
import { logInPage } from "../pages/logIn.page";

test.describe.only("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/index.html");
    await expect(page).toHaveTitle("WebDriverUniversity.com");
  });

  test("Login with username and Password", async ({ page }) => {
    const loginPage = new logInPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.logIn();
    // Listen for dialog events
    await page1.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      // Accept the dialog
      await dialog.accept(); // Use dialog.dismiss() to dismiss
    });
  });
});
