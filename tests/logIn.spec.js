import { test, expect } from "@playwright/test";
import { logInPage } from "../pages/logIn.page";

test.describe.only("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL);
    await expect(page).toHaveTitle("WebDriverUniversity.com");
  });

  test("Login with username and Password", async ({ page }) => {
    const loginPage = new logInPage(page);
    //await loginPage.navigateToLoginPage();
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD);

    // Listen for dialog events before triggering the dialog
    page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      // Accept the dialog
      await dialog.accept(); // Use dialog.dismiss() to dismiss
    });
  });
});
