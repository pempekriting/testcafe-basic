import { ClientFunction } from 'testcafe';
import { faker } from '@faker-js/faker';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';

faker.locale = 'id_ID';
const email = faker.internet.email();
const password = '123456';
const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);

fixture('Registration Fixture')
    .page(URL);

 test('Assert Home Page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .expect(homepage.subtitleHeader.exists).ok();
});

test('User Registration and Login Test', async t => {
    await t
        .click(homepage.registerLink)
        .expect(getURL()).contains('register');
    await registerpage.selectGender('male');
    await t
        .typeText(registerpage.firstNameInput, 'Azzam')
        .typeText(registerpage.lastNameInput, 'Nizar');
    await registerpage.selectDay('23');
    await registerpage.selectMonth('February');
    await registerpage.selectYear('1945');
    await t
        .typeText(registerpage.emailInput, email)
        .typeText(registerpage.companyNameInput, faker.company.companyName())
        .typeText(registerpage.passwordInput, password)
        .typeText(registerpage.confirmPasswordInput, password)
        .click(registerpage.registerButton)
        .expect(registerpage.successfullRegistration.exists).ok()
        .click(homepage.logoutLink)
        .click(homepage.loginLink)
        .expect(loginpage.emailInput.exists).ok()
        .typeText(loginpage.emailInput, email)
        .typeText(loginpage.passwordInput, password)
        .click(loginpage.submitButton)
        .click(homepage.myAccountLink)
        .expect(customerpage.ordersLink.exists).ok()
        .click(customerpage.ordersLink)
        .expect(customerpage.noOrdersLabel.exists).ok();
});

