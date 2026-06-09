class BasePage {

  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

  async reload() {
    await this.page.reload();
  }

  async wait(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

}

module.exports = BasePage;