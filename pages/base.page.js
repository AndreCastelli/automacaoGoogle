class BasePage {

  constructor(page) {
    this.page = page;
  }

async navegar(url) {
  await this.page.goto(url);
}

  async aguardarVisibilidade(locator) {
    await locator.waitFor({
      state: 'visible'
    });
  }

  async clicar(locator) {
    await this.aguardarVisibilidade(locator);
    await locator.click();
  }

  async obterTexto(locator) {
    await this.aguardarVisibilidade(locator);
    return await locator.textContent();
  }

}

module.exports = BasePage;