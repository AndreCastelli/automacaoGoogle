# language: pt
Funcionalidade: Cadastro de usuários

  @cadastro
  Esquema do Cenário: Registrar usuário

    Dado que acesso a página de cadastro
    Quando preencho os dados do usuário
    Então o usuário deve ser cadastrado com sucesso

    Exemplos:
      | usuario |
      | usuario1 |
      | usuario2 |
      | usuario3 |