#language: pt

Funcionalidade: Documentação Playwright

  Como usuário
  Quero acessar a documentação
  Para consultar informações de instalação

  @smoke
  Cenário: Acessar página Get Started

    Dado que acesso a home do AutoTestStore
    E acesso login
    Quando clico registro novo usuarioawait page.goto('https://automationteststore.com/');
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('radio', { name: 'Register Account' }).check();
    await page.getByRole('button', { name: ' Continue' }).click();
    await page.locator('#AccountFrm_firstname').click();
    await page.locator('#AccountFrm_firstname').fill('Maria');
    await page.locator('#AccountFrm_firstname').press('Tab');
    await page.locator('#AccountFrm_lastname').fill('Silva');
    await page.locator('#AccountFrm_email').click();
    await page.locator('#AccountFrm_email').fill('testes@qa.com');
    await page.locator('#AccountFrm_address_1').click();
    await page.locator('#AccountFrm_address_1').fill('rua teste');
    await page.locator('#AccountFrm_city').click();
    await page.locator('#AccountFrm_city').fill('Nova York');
    await page.locator('#AccountFrm_zone_id').selectOption('3580');
    await page.locator('#AccountFrm_zone_id').selectOption('3513');
    await page.locator('#AccountFrm_postcode').click();
    await page.locator('#AccountFrm_postcode').fill('01035100');
    await page.locator('#AccountFrm_loginname').click();
    await page.locator('#AccountFrm_loginname').fill('maria silva');
    await page.locator('#AccountFrm_loginname').press('Tab');
    await page.locator('#AccountFrm_password').fill('teste123');
    await page.locator('#AccountFrm_password').press('Tab');
    await page.locator('#AccountFrm_confirm').fill('teste23');
    await page.getByRole('checkbox', { name: 'I have read and agree to the' }).check();
    await page.getByRole('button', { name: ' Continue' }).click();
    await page.locator('#AccountFrm_loginname').click();
    await page.locator('#AccountFrm_loginname').click();
    await page.locator('#AccountFrm_loginname').press('ArrowLeft');
    await page.locator('#AccountFrm_loginname').press('ArrowLeft');
    await page.locator('#AccountFrm_loginname').press('ArrowLeft');
    await page.locator('#AccountFrm_loginname').fill('mariasilva');
    await page.locator('#AccountFrm_password').click();
    await page.locator('#AccountFrm_password').fill('teste123');
    await page.locator('#AccountFrm_password').press('Tab');
    await page.locator('#AccountFrm_password').fill('teste123teste123');
    await page.locator('#AccountFrm_password').click();
    await page.locator('#AccountFrm_password').fill('teste123');
    await page.locator('#AccountFrm_confirm').click();
    await page.locator('#AccountFrm_confirm').fill('teste123');
    await page.getByRole('button', { name: ' Continue' }).click();
    await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');
    await page.getByRole('link', { name: ' Continue' }).click();
    await page.getByRole('link', { name: 'Apparel & accessories' }).click();
    Então devo visualizar a página de instalação