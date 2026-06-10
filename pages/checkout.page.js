const BasePage = require('./base.page');

class CheckoutPage extends BasePage {

    elementos = {

        botaoConfirmarPedido: () =>
            this.page.getByRole(
                'button',
                {
                    name: /Confirm Order/
                }
            )

    };

    async confirmarPedido() {

        await this.botaoVisivel();

        await Promise.all([

            this.page.waitForLoadState(
                'networkidle'
            ),

            this.elementos
                .botaoConfirmarPedido()
                .click()

        ]);

    }

    async botaoVisivel() {

        await this.elementos
            .botaoConfirmarPedido()
            .waitFor();

    }

}

module.exports = CheckoutPage;