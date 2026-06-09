const { test, expect } = require('@playwright/test');
const GooglePage = require('../pages/google.page');

test.describe('Google Search', () => {

  let googlePage;

  test.beforeEach(async ({ page }) => {

    googlePage = new GooglePage(page);

    await googlePage.open();

  });

  test('@smoke Search Playwright', async ({ page }) => {

    await googlePage.search('Playwright');

    await expect(page).toHaveURL(/search/);

    await expect(
      googlePage.elements.results().first()
    ).toBeVisible();

  });

  test('@regression Search Cypress', async ({ page }) => {

    await googlePage.search('Cypress');

    await expect(page).toHaveURL(/search/);

    await expect(
      googlePage.elements.results().first()
    ).toBeVisible();

  });

});