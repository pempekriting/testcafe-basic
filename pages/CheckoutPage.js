import { Selector, t } from 'testcafe';

class CheckoutPage {
    constructor() {
        this.checkoutAsGuest = Selector('.button-1.checkout-as-guest-button');
        this.firstNameInput = Selector('#BillingNewAddress_FirstName');
        this.lastNameInput = Selector('#BillingNewAddress_LastName');
        this.emailInput = Selector('#BillingNewAddress_Email');
        this.countryDropdown = Selector('#BillingNewAddress_CountryId');
        this.countryToSelect = this.countryDropdown.find('option');
        this.stateProvinceDropdown = Selector('#BillingNewAddress_StateProvinceId');
        this.stateProvinceToSelect = this.stateProvinceDropdown.find('option');
        this.cityInput = Selector('#BillingNewAddress_City');
        this.addressOneInput = Selector('#BillingNewAddress_Address1');
        this.postalCodeInput = Selector('#BillingNewAddress_ZipPostalCode');
        this.phoneNumberInput = Selector('#BillingNewAddress_PhoneNumber');
        this.continueButton = Selector('.button-1.new-address-next-step-button');
        this.continueButton2 = Selector('.button-1.shipping-method-next-step-button');
        this.continueButton3 = Selector('.button-1.payment-method-next-step-button');
        this.continueButton4 = Selector('.button-1.payment-info-next-step-button');
        this.continueButton5 = Selector('.button-1.confirm-order-next-step-button');
        this.orderConfirmationSuccess = Selector('strong').withExactText('Your order has been successfully processed!');
        this.viewOrderDetailLink = Selector('a').withExactText('Click here for order details.');
    }

    async selectCountry(countryName) {
        await t
            .click(this.countryDropdown)
            .click(this.countryToSelect.withText(countryName));
    }

    async selectStateProvince(stateProvinceName) {
        await t
            .click(this.stateProvinceDropdown)
            .click(this.stateProvinceToSelect.withText(stateProvinceName));
    }
}

export default new CheckoutPage();