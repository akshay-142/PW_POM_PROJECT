import { test, expect } from "@playwright/test";

test.only("Login with username and Password", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/index.html");
  await page
    .locator("//h1[normalize-space()='LOGIN PORTAL']")
    .click({ force: true });
  const page1Promis = page.waitForEvent("popup");
  const page1 = await page1Promis;
  await page1.locator("//input[@id='text']").fill("akshayband123.com");
  await page1.locator("//input[@id='password']").fill("password123");
  await page1.locator("//button[@id='login-button']").click({ force: true });

  // Listen for dialog events
  page1.on("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    // Accept the dialog
    await dialog.accept(); // Use dialog.dismiss() to dismiss
  });
});
