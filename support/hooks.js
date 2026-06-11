const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
require('allure-cucumberjs');
const { owner, epic, feature } = require('allure-js-commons');
const { chromium } = require('@playwright/test');
const HomePage = require('../pages/home.page');
const CadastroPage = require('../pages/cadastro.page');
const CategoriaPage = require('../pages/categoria.page');
const ProdutoPage = require('../pages/produto.page');
const CarrinhoPage = require('../pages/carrinho.page');
const CheckoutPage = require('../pages/checkout.page');
const SucessoPage = require('../pages/sucesso.page');
const FormularioPage = require('../pages/formulario.page');
const { criarUsuario } = require('../utils/usuario.factory');

setDefaultTimeout(60000);

Before(async function (scenario) {

    this.browser =
        await chromium.launch({
            headless: !!process.env.CI,
            slowMo: process.env.CI ? 0 : 300
        });

    this.context =
        await this.browser.newContext({
            viewport: {
                width: 1920,
                height: 1080
            }
        });

    this.page =
        await this.context.newPage();

    // Massa de dados

    this.usuario =
        criarUsuario();

    // Pages

    this.homePage =
        new HomePage(this.page);

    this.cadastroPage =
        new CadastroPage(this.page);

    this.categoriaPage =
        new CategoriaPage(this.page);

    this.produtoPage =
        new ProdutoPage(this.page);

    this.carrinhoPage =
        new CarrinhoPage(this.page);

    this.checkoutPage =
        new CheckoutPage(this.page);

    this.sucessoPage =
        new SucessoPage(this.page);

    this.formularioPage =
        new FormularioPage(this.page);

    await owner('Andre Castelli');

    const tags =
        scenario.pickle.tags.map(tag => tag.name);

    if (tags.includes('@form')) {

        await epic(
            'Formulário Escolar'
        );

        await feature(
            'Cadastro de Aluno'
        );

    } else {

        await epic(
            'E-commerce'
        );

        await feature(
            'Checkout'
        );

    }

});

After(async function (scenario) {

    if (scenario.result.status === 'FAILED') {

        const screenshot =
            await this.page.screenshot({
                fullPage: true
            });

        await this.attach(
            screenshot,
            'image/png'
        );

    }

    await this.browser.close();

});