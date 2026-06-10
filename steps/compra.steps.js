const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { criarUsuario } = require('../utils/usuario.factory');
const { step } = require('allure-js-commons');

Given(
    'que acesso a tela de cadastro',
    async function () {

        await this.homePage.acessarHome();
        await this.homePage.acessarTelaCadastro();

    }
);

When(
    'realizo o cadastro do usuário {string}',
    async function (usuario) {

        await step(
            'Preencher cadastro',
            async () => {

                // Criar massa específica conforme o exemplo do cenário
                this.usuario = criarUsuario(usuario);

                console.log('Usuario criado:', this.usuario);

                await this.cadastroPage
                    .preencherCadastro(
                        this.usuario
                    );

                await this.cadastroPage
                    .concluirCadastro();

            }
        );

    }
);

When(
    'adiciono 3 produtos ao carrinho',
    async function () {

        await this.categoriaPage.acessarApparel();

        await this.produtoPage.adicionarPrimeiroProduto();

        await this.categoriaPage.acessarApparel();

        await this.produtoPage.adicionarPrimeiroProduto();

        await this.categoriaPage.acessarApparel();

        await this.produtoPage.adicionarTerceiroProduto();

    }
);

When(
    'finalizo o checkout',
    async function () {

        await this.carrinhoPage
            .validarQuantidadeProdutos(3);

        await this.carrinhoPage
            .irParaCheckout();

        await this.checkoutPage
            .confirmarPedido();

    }
);

Then(
    'o pedido deve ser processado com sucesso',
    async function () {

        await this.sucessoPage
            .validarPedidoProcessado();

    }
);