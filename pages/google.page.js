const BasePage = require('./base.page');

class GooglePage extends BasePage {

  constructor(page) {
    super(page);
  }

  elements = {

    searchInput: () =>
      this.page.locator('textarea[name="q"]'),

    results: () =>
      this.page.locator('h3')

  };

  async open() {
    await this.navigate('/');
  }

  async search(term) {
    await this.elements.searchInput().fill(term);
    await this.elements.searchInput().press('Enter');
  }

  async getFirstResultText() {
    return await this.elements
      .results()
      .first()
      .textContent();
  }

}

module.exports = GooglePage;