function criarUsuario(tipoUsuario = 'usuario1') {

    const timestamp = Date.now();

    const usuarios = {

        usuario1: {
            primeiroNome: 'Andre',
            sobrenome: 'Castelli'
        },

        usuario2: {
            primeiroNome: 'Douglas',
            sobrenome: 'Silva'
        },

        usuario3: {
            primeiroNome: 'Maria',
            sobrenome: 'Souza'
        }

    };

    const usuario =
        usuarios[tipoUsuario];

    return {

        primeiroNome:
            usuario.primeiroNome,

        sobrenome:
            usuario.sobrenome,

        email:
            `${tipoUsuario}${timestamp}@teste.com`,

        endereco:
            'Rua Teste 123',

        cidade:
            'Sao Paulo',

        cep:
            '01035100',

        login:
            `${tipoUsuario}${timestamp}`,

        senha:
            'Teste@123'

    };

}

module.exports = {
    criarUsuario
};