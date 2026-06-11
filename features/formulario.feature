# language: pt

Funcionalidade: Preencher formulario

  @e2e @form
  Esquema do Cenário: preencher formulario e validar sucesso

    Dado que acesso a tela de formulario

    Quando preencho os dados do aluno "<aluno>"

    E preencho os dados dos responsáveis

    E preencho os telefones de contato

    E preencho o endereço

    E preencho os dados acadêmicos

    E envio o formulario

    Então o formulario deve ser enviado com sucesso

    Exemplos:
      | aluno  |
      | aluno1 |
      | aluno2 |
      | aluno3 |
