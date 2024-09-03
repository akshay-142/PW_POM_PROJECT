import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../pages/contactUs.page";

test.describe.only("Contact Us Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL);
    await expect(page).toHaveTitle("WebDriverUniversity.com");
  });

  test("Click on submit without filling any details and validate error message", async ({
    page,
  }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigateToContactUsPage();
    await contactUsPage.clickSubmitWithoutFillingDetails();
  });

  test("Add contact details", async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigateToContactUsPage();
    await contactUsPage.addContactDetails();
  });
});
