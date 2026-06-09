#language: pt

Funcionalidade: Documentação Playwright

  Como usuário
  Quero acessar a documentação
  Para consultar informações de instalação

  @smoke
  Cenário: Acessar página Get Started

    Dado que acesso a home do Playwright
    Quando clico em Get Started
    Então devo visualizar a página de instalação