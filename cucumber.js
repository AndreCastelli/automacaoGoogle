module.exports = {
    default: {
        require: [
            'steps/**/*.js',
            'support/**/*.js'
        ],

        format: [
            'progress',
            'allure-cucumberjs/reporter'
        ],

        formatOptions: {
            resultsDir: 'allure-results',

            categories: [
                {
                    name: 'Falha de Automação',
                    matchedStatuses: ['broken']
                },
                {
                    name: 'Falha Funcional',
                    matchedStatuses: ['failed']
                }
            ],

            environmentInfo: {
                Aplicacao: 'Automation Test Store',
                Ambiente: 'QA',
                Navegador: 'Chromium',
                Framework: 'Playwright + Cucumber',
                Linguagem: 'JavaScript'
            }
        }
    }
};