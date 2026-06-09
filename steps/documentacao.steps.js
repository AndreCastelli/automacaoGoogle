const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber');

const {
  expect
} = require('@playwright/test');

Given(
  'que acesso a home do AutoTestStore',
  async function () {

    await this.documentacaoPage.acessarHome();

  }
);

When(
  'clico em Get Started',
  async function () {

    await this.documentacaoPage.clicarGetStarted();

  }
);

Then(
  'devo visualizar a página de instalação',
  async function () {

    const titulo =
      await this.documentacaoPage.obterTituloPagina();

    expect(titulo).toContain(
      'Installation'
    );

  }
);