import { expect } from "@playwright/test";

export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.contactUsLocator = page.locator(
      "//h1[normalize-space()='CONTACT US']"
    );
    this.submitButtonLocator = page.locator("input[value='SUBMIT']");
    this.firstNameLocator = page.locator("//input[@placeholder='First Name']");
    this.lastNameLocator = page.locator("//input[@placeholder='Last Name']");
    this.emailLocator = page.locator("//input[@placeholder='Email Address']");
    this.commentsLocator = page.locator("//textarea[@placeholder='Comments']");
  }

  async navigateToContactUsPage() {
    // Click on the Contact Us link and wait for the popup or new tab
    const [newTab] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.contactUsLocator.click(),
    ]);

    this.currentTab = newTab; // Save the new tab instance for further actions
  }

  async clickSubmitWithoutFillingDetails() {
    if (!this.currentTab) {
      throw new Error(
        "Tab is not opened. Call navigateToContactUsPage() first."
      );
    }

    // Click submit button in the current tab and validate error message
    await this.currentTab
      .locator("input[value='SUBMIT']")
      .click({ force: true });

    const errorMessageLocator = this.currentTab.locator("body");
    await expect(errorMessageLocator).toContainText(
      "Error: all fields are required Error: Invalid email address"
    );
  }

  async addContactDetails() {
    // Fill out the form in the current tab
    await this.currentTab
      .locator("//input[@placeholder='First Name']")
      .fill("Akshay");
    await this.currentTab
      .locator("//input[@placeholder='Last Name']")
      .fill("Band");
    await this.currentTab
      .locator("//input[@placeholder='Email Address']")
      .fill("akshayband@hotmail.com");
    await this.currentTab
      .locator("//textarea[@placeholder='Comments']")
      .fill("Thank you");
    // Click submit
    await this.currentTab
      .locator("input[value='SUBMIT']")
      .click({ force: true });
  }
}
