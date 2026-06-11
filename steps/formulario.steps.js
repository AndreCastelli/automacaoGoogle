const { Given, When, Then } = require('@cucumber/cucumber');
const { criarAluno } = require('../utils/aluno.factory');
const { step, attachment } = require('allure-js-commons');

Given(
    'que acesso a tela de formulario',
    async function () {

        await this.formularioPage
            .navegar('https://www.jotform.com/form/253263543176660');

    }
);

When(
    'preencho os dados do aluno {string}',
    async function (tipoAluno) {

        this.aluno = criarAluno(tipoAluno);

        await attachment(
            'Dados do aluno',
            JSON.stringify(this.aluno, null, 2),
            'application/json'
        );

        await step(
            'Preencher dados do aluno',
            async () => {

                await this.formularioPage
                    .preencherDadosAluno(this.aluno);

            }
        );

    }
);

When(
    'preencho os dados dos responsáveis',
    async function () {

        await step(
            'Preencher dados dos responsáveis',
            async () => {

                await this.formularioPage
                    .preencherDadosResponsaveis(this.aluno);

            }
        );

    }
);

When(
    'preencho os telefones de contato',
    async function () {

        await step(
            'Preencher telefones de contato',
            async () => {

                await this.formularioPage
                    .preencherTelefones(this.aluno);

            }
        );

    }
);

When(
    'preencho o endereço',
    async function () {

        await step(
            'Preencher endereço',
            async () => {

                await this.formularioPage
                    .preencherEndereco(this.aluno);

            }
        );

    }
);

When(
    'preencho os dados acadêmicos',
    async function () {

        await step(
            'Preencher dados acadêmicos',
            async () => {

                await this.formularioPage
                    .preencherDadosAcademicos(this.aluno);

            }
        );

    }
);

When(
    'envio o formulario',
    async function () {

        await step(
            'Enviar formulario',
            async () => {

                await this.formularioPage
                    .enviarFormulario();

            }
        );

    }
);

Then(
    'o formulario deve ser enviado com sucesso',
    async function () {

        await this.formularioPage
            .validarEnvioComSucesso();

    }
);
