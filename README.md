# Automação Google

Automação E2E com Playwright + Cucumber, cobrindo o fluxo de compra de uma loja (OpenCart) e o preenchimento de um formulário (JotForm).

## Pré-requisitos

```bash
npm install
npx playwright install
```

## Como executar

| Comando | O que faz |
|---|---|
| `npm run test:formulario` | Roda os cenários do formulário (`@form`) e gera o relatório Allure |
| `npm run test:e2e` | Roda os cenários `@e2e` (compra + formulário) e gera o relatório Allure |
| `npm run allure:open` | Abre o relatório Allure gerado |
| `npx playwright test` | Roda os specs da pasta `tests/` (Playwright Test runner) |

Localmente o navegador roda com interface (`headless: false`) e `slowMo` para acompanhar a execução. Em CI (`process.env.CI`), `support/hooks.js` ajusta automaticamente para `headless: true` e `slowMo: 0`.

## Estrutura e padrões

- `features/` - cenários em Gherkin escritos em português (`# language: pt`), com tags (`@e2e`, `@form`) usadas para filtrar a execução
- `pages/` - Page Objects. Cada classe estende `BasePage` e mantém os locators no objeto `elementos`, com os métodos de ação na mesma classe
- `steps/` - definições dos steps. Ações relevantes são envolvidas em `step()` do `allure-js-commons` para aparecer detalhadas no relatório
- `support/hooks.js` - hooks globais (`Before`/`After`): cria browser/contexto/página, monta a massa de dados e define epic/feature do Allure conforme a tag do cenário
- `support/world.js` - World customizado, com o estado compartilhado entre os steps de cada cenário
- `utils/*.factory.js` - geração da massa de dados de teste (`criarUsuario`, `criarAluno`)

## Relatório (Allure)

Os scripts `test:*` já geram o relatório (`allure-results` -> `allure-report`). Use `npm run allure:open` para visualizar.

## CI

- `.github/workflows/e2e.yml` - roda `npm run test:e2e` a cada push na `main`
