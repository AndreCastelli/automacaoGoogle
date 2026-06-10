const BasePage = require('./base.page');

class HomePage extends BasePage {

    elementos = {

        loginOuCadastro: () =>
            this.page.getByRole(
                'link',
                {
                    name: 'Login or register'
                }
            ),

        registrarConta: () =>
            this.page
                .locator('#accountFrm')
                .getByText('Register Account'),

        continuar: () =>
            this.page.getByRole(
                'button',
                {
                    name: /Continue/
                }
            )

    };

    async acessarHome() {

        await this.page.goto(
            'https://automationteststore.com/'
        );

    }

    async acessarTelaCadastro() {

        await this.clicar(
            this.elementos.loginOuCadastro()
        );

        await this.clicar(
            this.elementos.registrarConta()
        );

        await this.clicar(
            this.elementos.continuar()
        );

    }

}

module.exports = HomePage;