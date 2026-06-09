const { test, expect } = require('@playwright/test');
const PlaywrightPage = require('../pages/playwright.page');

test.describe('Playwright Website', () => {

  let playwrightPage;

  test.beforeEach(async ({ page }) => {

    playwrightPage = new PlaywrightPage(page);

    await playwrightPage.open();

  });

  test('@smoke Should navigate to Get Started page', async ({ page }) => {

    await playwrightPage.clickGetStarted();

    await expect(page).toHaveURL(/intro/);

    await expect(
      playwrightPage.elements.docsTitle()
    ).toContainText('Installation');

  });

});