export class logInPage {
  constructor(page) {
    this.page = page;
    this.loginLocator = page.locator("//h1[normalize-space()='LOGIN PORTAL']");
    this.usernameLocator = page.locator("//input[@id='text']");
    this.passwordLocator = page.locator("//input[@id='password']");
    this.loginButtonLocator = page.locator("//button[@id='login-button']");
    this.currentTab = null;
  }
  async navigateToLoginPage() {
    // Click on the Contact Us link and wait for the popup or new tab
    const [newTab] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.loginLocator.click(),
    ]);
    this.currentTab = newTab; // Save the new tab instance for further actions
  }
  async logIn() {
    // Fill out the form in the current tab
    await this.currentTab
      .locator("//input[@id='text']")
      .fill("akshayband123.com");
    await this.currentTab
      .locator("//input[@id='password']")
      .fill("password123");
    await this.currentTab
      .locator("//button[@id='login-button']")
      .click({ force: true });
  }
}
