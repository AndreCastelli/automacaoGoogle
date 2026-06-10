const { step } = require('allure-js-commons');

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navegar(url) {
        await this.page.goto(url);
    }

    async clicar(locator) {

        await locator.waitFor({
            state: 'visible'
        });

        await locator.click();
    }

    async preencher(locator, valor) {

        await step(
            `Preencher campo com "${valor}"`,
            async () => {

                await locator.waitFor({
                    state: 'visible',
                    timeout: 10000
                });

                await locator.fill(valor);

            }
        );

    }

    async obterTexto(locator) {

        await locator.waitFor({
            state: 'visible'
        });

        return await locator.textContent();
    }

}
module.exports = BasePage;