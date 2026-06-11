const { expect } = require('@playwright/test');
const BasePage = require('./base.page');

class FormularioPage extends BasePage {

    elementos = {

        primeiroNome: () =>
            this.page.getByRole('group', { name: 'Nome do estudante' }).getByLabel('Nome', { exact: true }),

        sobrenome: () =>
            this.page.getByRole('group', { name: 'Nome do estudante' }).getByLabel('Sobrenome'),

        dataNascimentoDia: () =>
            this.page.locator('#input_4_day'),

        dataNascimentoMes: () =>
            this.page.locator('#input_4_month'),

        dataNascimentoAno: () =>
            this.page.locator('#input_4_year'),

        serie: () =>
            this.page.getByRole('textbox', { name: 'Série' }),

        nomeMae: () =>
            this.page.getByRole('group', { name: 'Mãe/responsável' }).getByLabel('Nome', { exact: true }),

        sobrenomeMae: () =>
            this.page.getByRole('group', { name: 'Mãe/responsável' }).getByLabel('Sobrenome'),

        nomePai: () =>
            this.page.getByRole('group', { name: 'Pai/responsável' }).getByLabel('Nome', { exact: true }),

        sobrenomePai: () =>
            this.page.getByRole('group', { name: 'Pai/responsável' }).getByLabel('Sobrenome'),

        telefoneResidencialCodigo: () =>
            this.page.getByRole('textbox', { name: 'Telefone residencial Código' }),

        telefoneResidencialNumero: () =>
            this.page.getByRole('textbox', { name: 'Telefone residencial Telefone' }),

        celularCodigo: () =>
            this.page.getByRole('textbox', { name: 'Celular Código de área' }),

        celularNumero: () =>
            this.page.getByRole('textbox', { name: 'Celular Telefone' }),

        telefoneProfissionalCodigo: () =>
            this.page.getByRole('textbox', { name: 'Telefone profissional Código' }),

        telefoneProfissionalNumero: () =>
            this.page.getByRole('textbox', { name: 'Telefone profissional Telefone' }),

        endereco: () =>
            this.page.getByRole('textbox', { name: 'Endereço' }),

        bairro: () =>
            this.page.getByRole('textbox', { name: 'Bairro' }),

        cidade: () =>
            this.page.getByRole('textbox', { name: 'Cidade' }),

        estado: () =>
            this.page.getByRole('textbox', { name: 'Estado' }),

        cep: () =>
            this.page.getByRole('textbox', { name: 'CEP' }),

        pais: () =>
            this.page.getByRole('combobox', { name: 'País' }),

        materiaMatematica: () =>
            this.page.getByRole('checkbox', { name: 'Matemática' }),

        materiaLeitura: () =>
            this.page.getByRole('checkbox', { name: 'Leitura' }),

        materiaOutro: () =>
            this.page.getByRole('checkbox', { name: 'Outro' }),

        perfilAluno: () =>
            this.page.getByRole('checkbox', { name: 'Extrovertido/Introvertido' }),

        diasPresentes: () =>
            this.page.getByRole('textbox', { name: 'Ano anterior: dias presentes' }),

        diasAusentes: () =>
            this.page.getByRole('textbox', { name: 'Ano anterior: dias ausente' }),

        escolasAnteriores: () =>
            this.page.getByRole('textbox', { name: 'Liste as escolas anteriores' }),

        notaMatematicaProva: () =>
            this.page.locator('#input_20'),

        notaPortuguesProva: () =>
            this.page.locator('#input_21'),

        dataAvaliacaoMes: () =>
            this.page.locator('#input_25_month'),

        dataAvaliacaoDia: () =>
            this.page.locator('#input_25_day'),

        dataAvaliacaoAno: () =>
            this.page.locator('#input_25_year'),

        resultadosAvaliacao: () =>
            this.page.getByRole('textbox', { name: 'Resultados' }),

        necessitaReavaliacao: () =>
            this.page.getByRole('radiogroup', { name: 'Necessita de reavaliação' }).getByLabel('Sim'),

        dataNascimentoTriagemMes: () =>
            this.page.locator('#input_27_month'),

        dataNascimentoTriagemDia: () =>
            this.page.locator('#input_27_day'),

        dataNascimentoTriagemAno: () =>
            this.page.locator('#input_27_year'),

        dataVisaoMes: () =>
            this.page.locator('#input_28_month'),

        dataVisaoDia: () =>
            this.page.locator('#input_28_day'),

        dataVisaoAno: () =>
            this.page.locator('#input_28_year'),

        resultadoReavaliacao: () =>
            this.page.getByRole('textbox', { name: 'Resultado', exact: true }),

        rechecagem: () =>
            this.page.getByRole('radiogroup', { name: 'Rechecagem?' }).getByLabel('Não'),

        necessidadesEspeciais: () =>
            this.page.getByRole('textbox', { name: 'Necessidades especiais' }),

        qtdRelatoriosDisciplina: () =>
            this.page.getByRole('textbox', { name: 'Quantidade de relatórios de' }),

        qtdSuspensoes: () =>
            this.page.getByRole('textbox', { name: 'Quantidade de suspensões', exact: true }),

        qtdSuspensoesEscola: () =>
            this.page.getByRole('textbox', { name: 'Quantidade de suspensões na' }),

        qtdSuspensoesFora: () =>
            this.page.getByRole('textbox', { name: 'Número de suspensões fora da' }),

        notaPortugues: () =>
            this.page.locator('#input_38_0'),

        notaLeitura: () =>
            this.page.getByRole('textbox', { name: 'LEitura' }),

        notaMatematica: () =>
            this.page.locator('#input_38_2'),

        notaCiencias: () =>
            this.page.getByRole('textbox', { name: 'Ciências' }),

        notaEstudosSociais: () =>
            this.page.getByRole('textbox', { name: 'Estudos osciais' }),

        notaEducacaoFisica: () =>
            this.page.getByRole('textbox', { name: 'Educação física' }),

        notaOutro: () =>
            this.page.getByRole('textbox', { name: 'Outro' }),

        anoRetencao: () =>
            this.page.getByRole('textbox', { name: 'Ano', exact: true }),

        notasRetencao: () =>
            this.page.getByRole('textbox', { name: 'Notas' }),

        escolaAnterior: () =>
            this.page.getByRole('textbox', { name: 'Escola anterior' }),

        botaoEnviar: () =>
            this.page.getByRole('button', { name: 'Enviar' }),

        iconeSucesso: () =>
            this.page.getByRole('img', { name: 'thank you check icon' }),

        tituloSucesso: () =>
            this.page.getByRole('heading'),

        mensagemSucesso: () =>
            this.page.locator('#stage')

    };

    async preencherDadosAluno(aluno) {

        await this.preencher(
            this.elementos.primeiroNome(),
            aluno.primeiroNome
        );

        await this.preencher(
            this.elementos.sobrenome(),
            aluno.sobrenome
        );

        await this.elementos.dataNascimentoDia()
            .selectOption(aluno.dataNascimentoDia);

        await this.elementos.dataNascimentoMes()
            .selectOption(aluno.dataNascimentoMes);

        await this.elementos.dataNascimentoAno()
            .selectOption(aluno.dataNascimentoAno);

        await this.preencher(
            this.elementos.serie(),
            aluno.serie
        );

    }

    async preencherDadosResponsaveis(aluno) {

        await this.preencher(
            this.elementos.nomeMae(),
            aluno.nomeMae
        );

        await this.preencher(
            this.elementos.sobrenomeMae(),
            aluno.sobrenomeMae
        );

        await this.preencher(
            this.elementos.nomePai(),
            aluno.nomePai
        );

        await this.preencher(
            this.elementos.sobrenomePai(),
            aluno.sobrenomePai
        );

    }

    async preencherTelefones(aluno) {

        await this.preencher(
            this.elementos.telefoneResidencialCodigo(),
            aluno.telefoneResidencialCodigo
        );

        await this.preencher(
            this.elementos.telefoneResidencialNumero(),
            aluno.telefoneResidencialNumero
        );

        await this.preencher(
            this.elementos.celularCodigo(),
            aluno.celularCodigo
        );

        await this.preencher(
            this.elementos.celularNumero(),
            aluno.celularNumero
        );

        await this.preencher(
            this.elementos.telefoneProfissionalCodigo(),
            aluno.telefoneProfissionalCodigo
        );

        await this.preencher(
            this.elementos.telefoneProfissionalNumero(),
            aluno.telefoneProfissionalNumero
        );

    }

    async preencherEndereco(aluno) {

        await this.preencher(
            this.elementos.endereco(),
            aluno.endereco
        );

        await this.preencher(
            this.elementos.bairro(),
            aluno.bairro
        );

        await this.preencher(
            this.elementos.cidade(),
            aluno.cidade
        );

        await this.preencher(
            this.elementos.estado(),
            aluno.estado
        );

        await this.preencher(
            this.elementos.cep(),
            aluno.cep
        );

        await this.elementos.pais()
            .selectOption('Brazil');

    }

    async preencherDadosAcademicos(aluno) {

        await this.clicar(
            this.elementos.materiaMatematica()
        );

        await this.clicar(
            this.elementos.materiaLeitura()
        );

        await this.clicar(
            this.elementos.materiaOutro()
        );

        await this.clicar(
            this.elementos.perfilAluno()
        );

        await this.preencher(
            this.elementos.diasPresentes(),
            aluno.diasPresentes
        );

        await this.preencher(
            this.elementos.diasAusentes(),
            aluno.diasAusentes
        );

        await this.preencher(
            this.elementos.escolasAnteriores(),
            aluno.escolasAnteriores
        );

        await this.preencher(
            this.elementos.notaMatematicaProva(),
            aluno.notaMatematicaProva
        );

        await this.preencher(
            this.elementos.notaPortuguesProva(),
            aluno.notaPortuguesProva
        );

        await this.elementos.dataAvaliacaoMes()
            .selectOption(aluno.dataAvaliacaoMes);

        await this.elementos.dataAvaliacaoDia()
            .selectOption(aluno.dataAvaliacaoDia);

        await this.elementos.dataAvaliacaoAno()
            .selectOption(aluno.dataAvaliacaoAno);

        await this.preencher(
            this.elementos.resultadosAvaliacao(),
            aluno.resultadosAvaliacao
        );

        await this.clicar(
            this.elementos.necessitaReavaliacao()
        );

        await this.elementos.dataNascimentoTriagemMes()
            .selectOption(aluno.dataNascimentoTriagemMes);

        await this.elementos.dataNascimentoTriagemDia()
            .selectOption(aluno.dataNascimentoTriagemDia);

        await this.elementos.dataNascimentoTriagemAno()
            .selectOption(aluno.dataNascimentoTriagemAno);

        await this.elementos.dataVisaoMes()
            .selectOption(aluno.dataVisaoMes);

        await this.elementos.dataVisaoDia()
            .selectOption(aluno.dataVisaoDia);

        await this.elementos.dataVisaoAno()
            .selectOption(aluno.dataVisaoAno);

        await this.preencher(
            this.elementos.resultadoReavaliacao(),
            aluno.resultadoReavaliacao
        );

        await this.clicar(
            this.elementos.rechecagem()
        );

        await this.preencher(
            this.elementos.necessidadesEspeciais(),
            aluno.necessidadesEspeciais
        );

        await this.preencher(
            this.elementos.qtdRelatoriosDisciplina(),
            aluno.qtdRelatoriosDisciplina
        );

        await this.preencher(
            this.elementos.qtdSuspensoes(),
            aluno.qtdSuspensoes
        );

        await this.preencher(
            this.elementos.qtdSuspensoesEscola(),
            aluno.qtdSuspensoesEscola
        );

        await this.preencher(
            this.elementos.qtdSuspensoesFora(),
            aluno.qtdSuspensoesFora
        );

        await this.preencher(
            this.elementos.notaPortugues(),
            aluno.notaPortugues
        );

        await this.preencher(
            this.elementos.notaLeitura(),
            aluno.notaLeitura
        );

        await this.preencher(
            this.elementos.notaMatematica(),
            aluno.notaMatematica
        );

        await this.preencher(
            this.elementos.notaCiencias(),
            aluno.notaCiencias
        );

        await this.preencher(
            this.elementos.notaEstudosSociais(),
            aluno.notaEstudosSociais
        );

        await this.preencher(
            this.elementos.notaEducacaoFisica(),
            aluno.notaEducacaoFisica
        );

        await this.preencher(
            this.elementos.notaOutro(),
            aluno.notaOutro
        );

        await this.preencher(
            this.elementos.anoRetencao(),
            aluno.anoRetencao
        );

        await this.preencher(
            this.elementos.notasRetencao(),
            aluno.notasRetencao
        );

        await this.preencher(
            this.elementos.escolaAnterior(),
            aluno.escolaAnterior
        );

    }

    async enviarFormulario() {

        await this.clicar(
            this.elementos.botaoEnviar()
        );

        await this.page.waitForURL(
            'https://submit.jotform.com/253263543176660'
        );

    }

    async validarEnvioComSucesso() {

        await expect(
            this.elementos.iconeSucesso()
        ).toBeVisible();

        await expect(
            this.elementos.tituloSucesso()
        ).toContainText('Obrigado!');

        await expect(
            this.elementos.mensagemSucesso()
        ).toContainText('O seu envio foi recebido.');

    }

}

module.exports = FormularioPage;
