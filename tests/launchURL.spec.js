import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com/");

  // Optionally, do something with the page
  // await page.screenshot({ path: 'screenshot.png' });

  //await browser.close();
})();
