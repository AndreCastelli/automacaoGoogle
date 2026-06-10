const BasePage = require('./base.page');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }

    elementos = {

        botaoCadastro: () =>
            this.page.locator(
                'button[title="Continue"]'
            )

    };

    async acessarCadastro() {

        await this.clicar(
            this.elementos.botaoCadastro()
        );

    }

}

module.exports = LoginPage;