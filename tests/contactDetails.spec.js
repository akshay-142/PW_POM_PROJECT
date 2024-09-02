import { test, expect } from "@playwright/test";

test("Validate title of the page", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/index.html");
  //Validate title of the page
  await expect(page).toHaveTitle("WebDriverUniversity.com");
});

test("Click on submit without filling any details and validate error message", async ({
  page,
}) => {
  // Navigate to the target page
  await page.goto("https://webdriveruniversity.com/index.html");

  // Validate the title of the page
  await expect(page).toHaveTitle("WebDriverUniversity.com");
  const page1Promise = page.waitForEvent("popup");
  // Click on the "CONTACT US" link
  await page.locator("//h1[normalize-space()='CONTACT US']").click();
  const page1 = await page1Promise;
  // Click on the submit button
  await page1.locator("input[value='SUBMIT']").click({ force: true });

  // Create a locator for the error message (use correct selector for the actual error message container)
  const errorMessageLocator = page1.locator("body");
  // Validate the error message
  await expect(errorMessageLocator).toContainText(
    "Error: all fields are required Error: Invalid email address"
  );
});

test("Add contact details", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/index.html");
  //Validate title of the page
  await expect(page).toHaveTitle("WebDriverUniversity.com");
  const page1Promise = page.waitForEvent("popup");

  //Click on the contact
  await page
    .locator("//h1[normalize-space()='CONTACT US']")
    .click({ force: true });
  const page1 = await page1Promise;
  //Add contact details
  await page1.locator("//input[@placeholder='First Name']").fill("Akshay");
  await page1.locator("//input[@placeholder='Last Name']").fill("Band");
  await page1
    .locator("//input[@placeholder='Email Address']")
    .fill("akshayband@hotmail.com");
  await page1.locator("//textarea[@placeholder='Comments']").fill("Thank you");
  await page1.locator("//input[@value='SUBMIT']").click();
});
