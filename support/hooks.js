const {Before,After} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const DocumentacaoPage = require('../pages/documentacao.page');

Before(async function () {

  this.browser = await chromium.launch({
    headless: false
  });

  this.context =
    await this.browser.newContext();

  this.page =
    await this.context.newPage();

  this.documentacaoPage =
    new DocumentacaoPage(this.page);

});

After(async function () {

  await this.browser.close();

});