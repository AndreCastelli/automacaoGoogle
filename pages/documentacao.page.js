const BasePage = require('./base.page');

class DocumentacaoPage extends BasePage {

  constructor(page) {
    super(page);
  }

  elementos = {

    botaoGetStarted: () =>
      this.page.getByRole('link', {
        name: 'Get started'
      }),

    tituloInstalacao: () =>
      this.page.locator('h1')

  };

async acessarHome() {
  await this.navegar('https://automationteststore.com/');
}

  async clicarGetStarted() {
    await this.clicar(
      this.elementos.botaoGetStarted()
    );

  }

  async obterTituloPagina() {

    return await this.obterTexto(
      this.elementos.tituloInstalacao()
    );

  }

}

module.exports = DocumentacaoPage;