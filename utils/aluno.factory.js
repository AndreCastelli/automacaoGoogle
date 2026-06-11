function criarAluno(tipoAluno = 'aluno1') {

    const alunos = {

        aluno1: {
            primeiroNome: 'Pedro',
            sobrenome: 'Santos',
            nomeMae: 'Ana',
            sobrenomeMae: 'Santos',
            nomePai: 'Carlos',
            sobrenomePai: 'Santos'
        },

        aluno2: {
            primeiroNome: 'Julia',
            sobrenome: 'Lima',
            nomeMae: 'Patricia',
            sobrenomeMae: 'Lima',
            nomePai: 'Roberto',
            sobrenomePai: 'Lima'
        },

        aluno3: {
            primeiroNome: 'Lucas',
            sobrenome: 'Oliveira',
            nomeMae: 'Mariana',
            sobrenomeMae: 'Oliveira',
            nomePai: 'Fernando',
            sobrenomePai: 'Oliveira'
        }

    };

    const aluno =
        alunos[tipoAluno];

    return {

        primeiroNome:
            aluno.primeiroNome,

        sobrenome:
            aluno.sobrenome,

        dataNascimentoDia:
            '7',

        dataNascimentoMes:
            '7',

        dataNascimentoAno:
            '2016',

        serie:
            '5',

        nomeMae:
            aluno.nomeMae,

        sobrenomeMae:
            aluno.sobrenomeMae,

        nomePai:
            aluno.nomePai,

        sobrenomePai:
            aluno.sobrenomePai,

        telefoneResidencialCodigo:
            '11',

        telefoneResidencialNumero:
            '98765432',

        celularCodigo:
            '11',

        celularNumero:
            '987654321',

        telefoneProfissionalCodigo:
            '11',

        telefoneProfissionalNumero:
            '12345678',

        endereco:
            'Rua Teste, 123',

        bairro:
            'Centro',

        cidade:
            'São Paulo',

        estado:
            'SP',

        cep:
            '01035100',

        diasPresentes:
            '150',

        diasAusentes:
            '1',

        escolasAnteriores:
            'Escola Modelo',

        notaMatematicaProva:
            '10',

        notaPortuguesProva:
            '10',

        dataAvaliacaoMes:
            '1',

        dataAvaliacaoDia:
            '28',

        dataAvaliacaoAno:
            '2017',

        resultadosAvaliacao:
            '10',

        dataNascimentoTriagemMes:
            '10',

        dataNascimentoTriagemDia:
            '14',

        dataNascimentoTriagemAno:
            '2011',

        dataVisaoMes:
            '2',

        dataVisaoDia:
            '10',

        dataVisaoAno:
            '2018',

        resultadoReavaliacao:
            '10',

        necessidadesEspeciais:
            'Não',

        qtdRelatoriosDisciplina:
            '5',

        qtdSuspensoes:
            '0',

        qtdSuspensoesEscola:
            '0',

        qtdSuspensoesFora:
            '0',

        notaPortugues:
            '10',

        notaLeitura:
            '10',

        notaMatematica:
            '10',

        notaCiencias:
            '10',

        notaEstudosSociais:
            '10',

        notaEducacaoFisica:
            '10',

        notaOutro:
            '10',

        anoRetencao:
            '2019',

        notasRetencao:
            '10',

        escolaAnterior:
            'Escola Anterior'

    };

}

module.exports = {
    criarAluno
};
