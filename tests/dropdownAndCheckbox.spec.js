// import { test, expect } from "@playwright/test";

// test.describe("Dropdown and Checkbox", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://webdriveruniversity.com/index.html");
//     await expect(page).toHaveTitle("WebDriverUniversity.com");
//   });

//   test("Select dropdown value", async ({ page }) => {

//     await page.click("a[href='/Dropdown-Checkboxes-RadioButtons/index.html']");
//     await page.waitForSelector("h1");
//     const dropdown = page.locator("#dropdowm-menu-1");
//     await dropdown.selectOption({ index: 2 });
//     await expect(dropdown).toHaveText("Option 2");
//   });

//   test("Check and uncheck checkbox", async ({ page }) => {
//     await page.click("a[href='/Dropdown-Checkboxes-RadioButtons/index.html']");
//     await page.waitForSelector("h1");
//     const checkbox = page.locator("//input[@value='option-1']");
//     await checkbox.check();
//     await expect(checkbox).toBeChecked();
//     await checkbox.uncheck();
//     await expect(checkbox).not.toBeChecked();
//   });
// });
