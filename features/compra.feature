# language: pt

Funcionalidade: Compra completa

  @e2e
  Esquema do Cenário: Cadastrar usuário e finalizar pedido

    Dado que acesso a tela de cadastro

    Quando realizo o cadastro do usuário "<usuario>"

    E adiciono 3 produtos ao carrinho

    E finalizo o checkout

    Então o pedido deve ser processado com sucesso

    Exemplos:
      | usuario  |
      | usuario1 |
      | usuario2 |
      | usuario3 |