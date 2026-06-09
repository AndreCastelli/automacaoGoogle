const BasePage = require('./base.page');

class PlaywrightPage extends BasePage {

  constructor(page) {
    super(page);
  }

  elements = {

    getStartedButton: () =>
      this.page.getByRole('link', { name: 'Get started' }),

    docsTitle: () =>
      this.page.locator('h1'),

    searchButton: () =>
      this.page.locator('.DocSearch-Button')

  };

  async open() {
    await this.navigate('/');
  }

  async clickGetStarted() {
    await this.elements.getStartedButton().click();
  }

}

module.exports = PlaywrightPage;