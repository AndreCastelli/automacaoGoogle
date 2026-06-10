const BasePage = require('./base.page');
const { expect } = require('@playwright/test');

class SucessoPage extends BasePage {

    elementos = {

        titulo: () =>
            this.page.locator('h1')

    };

    async validarPedidoProcessado() {

        await expect(
            this.elementos.titulo()
        ).toContainText(
            'Your Order Has Been Processed!'
        );

    }

}

module.exports = SucessoPage;