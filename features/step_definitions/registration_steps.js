const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const registerpage = require('../../pages/RegisterBddPage');
const { faker } = require('@faker-js/faker');

faker.locale = 'id_ID';
const email = faker.internet.email();
const password = '123456';
const URL = 'https://demo.nopcommerce.com/register';

Given('User already on the registration page', async function () {
    await testController.navigateTo(URL);
  });

  When('User fills out the registration form with correct data', async function () {
    await testController.click(registerpage.RegisterPage.GenderButton());
    await testController.typeText(registerpage.RegisterPage.FirstName(), faker.internet.userName());
    await testController.typeText(registerpage.RegisterPage.LastName(), faker.internet.userName());
    await testController.click(registerpage.RegisterPage.DateOfBirth());
    await testController.click(registerpage.RegisterPage.ListOption().withText('10'));
    await testController.click(registerpage.RegisterPage.MonthOfBirth());
    await testController.click(registerpage.RegisterPage.ListOption().withText('February'));
    await testController.click(registerpage.RegisterPage.YearOfBirth().withText('1965'));
    await testController.typeText(registerpage.RegisterPage.Email(), email);
    await testController.typeText(registerpage.RegisterPage.CompanyName(), faker.company.companyName());
    await testController.typeText(registerpage.RegisterPage.Password(), password);
    await testController.typeText(registerpage.RegisterPage.ConfirmPassword(), password);
    await testController.click(registerpage.RegisterPage.RegistrationButton());

  });

  Then('User should see successfull message', async function () {
    await testController.expect(registerpage.RegisterPage.SuccessFullMessage().exists).ok;
  });

