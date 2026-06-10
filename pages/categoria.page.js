const BasePage = require('./base.page');

class CategoriaPage extends BasePage {

    elementos = {

        apparel: () =>
            this.page.getByRole(
                'link',
                {
                    name: 'Apparel & accessories'
                }
            )

    };

    async acessarApparel() {

        await this.clicar(
            this.elementos.apparel()
        );

    }

}

module.exports = CategoriaPage;