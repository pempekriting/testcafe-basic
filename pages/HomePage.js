import { Selector,t } from "testcafe";

class HomePage {
    constructor() {
        this.subtitleHeader = Selector('h2').withExactText('Welcome to our store');
        this.registerLink = Selector('a').withExactText('Register');
        this.loginLink = Selector('a').withExactText('Log in');
        this.shoppingCartLink = Selector('a').withText('Shopping cart');
        this.wishlistLink = Selector('a').withText('Wishlist');
        this.myAccountLink = Selector('a').withExactText('My account');
        this.logoutLink = Selector('a').withExactText('Log out');
        this.currencyDropdown = Selector('select#customerCurrency');
    }

    get productSearch() {
        return Selector('input#small-searchterms');
    }

    async search(productName) {
        await t
            .typeText(this.productSearch, productName)
            .wait(3000)
            .pressKey('enter');
    }

    async changeCurrency(currency) {
        await t
            .click(this.currencyDropdown)
            .click(Selector('option', {text: currency}));
    }
}

export default new HomePage();