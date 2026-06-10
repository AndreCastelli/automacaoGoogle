const BasePage = require('./base.page');

class ProdutoPage extends BasePage {

    elementos = {

        adicionarCarrinho: () =>
            this.page.getByRole(
                'link',
                {
                    name: ' Add to Cart'
                }
            )

    };

    async adicionarPrimeiroProduto() {

        await this.page
            .getByTitle('Add to Cart')
            .first()
            .click();

        await this.clicar(
            this.elementos.adicionarCarrinho()
        );

    }

    async adicionarTerceiroProduto() {

        await this.page
            .getByTitle('Add to Cart')
            .nth(2)
            .click();

        await this.clicar(
            this.elementos.adicionarCarrinho()
        );

    }

}

module.exports = ProdutoPage;