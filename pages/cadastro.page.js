const BasePage = require('./base.page');

class CadastroPage extends BasePage {

    elementos = {

        primeiroNome: () =>
            this.page.locator(
                '#AccountFrm_firstname'
            ),

        sobrenome: () =>
            this.page.locator(
                '#AccountFrm_lastname'
            ),

        email: () =>
            this.page.locator(
                '#AccountFrm_email'
            ),

        endereco: () =>
            this.page.locator(
                '#AccountFrm_address_1'
            ),

        cidade: () =>
            this.page.locator(
                '#AccountFrm_city'
            ),

        estado: () =>
            this.page.locator(
                '#AccountFrm_zone_id'
            ),

        cep: () =>
            this.page.locator(
                '#AccountFrm_postcode'
            ),

        login: () =>
            this.page.locator(
                '#AccountFrm_loginname'
            ),

        senha: () =>
            this.page.locator(
                '#AccountFrm_password'
            ),

        confirmarSenha: () =>
            this.page.locator(
                '#AccountFrm_confirm'
            ),

        newsletter: () =>
            this.page.getByRole(
                'radio',
                { name: 'Yes' }
            ),

        aceiteTermos: () =>
            this.page.getByRole(
                'checkbox',
                {
                    name: /I have read/
                }
            ),

        continuar: () =>
            this.page.getByRole(
                'button',
                {
                    name: /Continue/
                }
            )

    };

    async preencherCadastro(usuario) {

        await this.preencher(
            this.elementos.primeiroNome(),
            usuario.primeiroNome
        );

        await this.preencher(
            this.elementos.sobrenome(),
            usuario.sobrenome
        );

        await this.preencher(
            this.elementos.email(),
            usuario.email
        );

        await this.preencher(
            this.elementos.endereco(),
            usuario.endereco
        );

        await this.preencher(
            this.elementos.cidade(),
            usuario.cidade
        );

        await this.elementos.estado()
            .selectOption('3513');

        await this.preencher(
            this.elementos.cep(),
            usuario.cep
        );

        await this.preencher(
            this.elementos.login(),
            usuario.login
        );

        await this.preencher(
            this.elementos.senha(),
            usuario.senha
        );

        await this.preencher(
            this.elementos.confirmarSenha(),
            usuario.senha
        );

        await this.newsletter();

        await this.clicar(
            this.elementos.aceiteTermos()
        );

    }

    async newsletter() {

        await this.clicar(
            this.elementos.newsletter()
        );

    }

    async concluirCadastro() {

        await this.clicar(
            this.elementos.continuar()
        );

    }

}

module.exports = CadastroPage;