import { ClientFunction } from 'testcafe';
import { faker } from '@faker-js/faker';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';
import searchresults from '../pages/searchResultPage';
import cartpage from '../pages/CartPage';
import checkoutpage from '../pages/CheckoutPage';
import productdetailspage from '../pages/ProductDetailsPage';

faker.locale = 'id_ID';
const email = faker.internet.email();
const password = '123456';
const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);

fixture('Registration Fixture')
    .page(URL);

test('User Registration and Login Test', async t => {
    await t
        .maximizeWindow()
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
        .expect(registerpage.successfullRegistration.exists).ok();
    await homepage.search('Apple MacBook Pro 13-inch');
    await t
        .click(searchresults.productTitle)
        .expect(getURL()).contains('apple-macbook-pro-13-inch')
        .expect(productdetailspage.productPrice.exists).ok()
        .selectText(productdetailspage.productQuantity).pressKey('delete')
        .typeText(productdetailspage.productQuantity, '3')
        .click(productdetailspage.addToCartButton)
        .expect(productdetailspage.notificationSuccessfull.exists).ok()
        .wait(3000)
        .click(homepage.shoppingCartLink)
        .click(cartpage.termsLabel)
        .click(cartpage.checkoutButton)
        .expect(getURL()).contains('checkout');
    await checkoutpage.selectCountry('United States');
    await checkoutpage.selectStateProvince('Arizona');
    await t
        .typeText(checkoutpage.cityInput, faker.address.city())
        .typeText(checkoutpage.addressOneInput, faker.address.ordinalDirection())
        .typeText(checkoutpage.postalCodeInput, faker.address.zipCodeByState())
        .typeText(checkoutpage.phoneNumberInput, faker.phone.number())
        .click(checkoutpage.continueButton)
        .click(checkoutpage.continueButton2)
        .click(checkoutpage.continueButton3)
        .click(checkoutpage.continueButton4)
        .click(checkoutpage.continueButton5)
        .expect(checkoutpage.orderConfirmationSuccess.exists).ok()
        .click(checkoutpage.viewOrderDetailLink)
        .click(homepage.myAccountLink)
        .click(customerpage.ordersLink)
});

test("Change Curreny Test", async t => {
    await homepage.changeCurrency('Euro')
});

