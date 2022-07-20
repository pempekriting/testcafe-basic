import { Selector } from 'testcafe';

class CartPage {
    constructor() {
        this.termsLabel = Selector('#termsofservice');
        this.cartTotal = Selector('.cart-total-right');
        this.checkoutButton = Selector('#checkout');
    }
}

export default new CartPage();