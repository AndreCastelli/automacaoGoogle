const BasePage = require('./base.page');
const { expect } = require('@playwright/test');

class CarrinhoPage extends BasePage {

    elementos = {

        botaoCheckout: () =>
            this.page.locator('#cart_checkout2'),

        linhasCarrinho: () =>
            this.page.locator('table tbody tr')

    };

    async acessarCarrinho() {

        await this.page.goto(
            'https://automationteststore.com/index.php?rt=checkout/cart'
        );

    }

    async validarQuantidadeProdutos(
        quantidadeEsperada
    ) {

        await this.acessarCarrinho();

        const quantidade =
            await this.elementos
                .linhasCarrinho()
                .count();

        expect(quantidade)
            .toBeGreaterThanOrEqual(
                quantidadeEsperada
            );

    }

    async irParaCheckout() {

        await this.clicar(
            this.elementos.botaoCheckout()
        );

    }

}

module.exports = CarrinhoPage;