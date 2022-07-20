import { Selector } from 'testcafe';

class ProductDetails {
    constructor() {
        this.productPrice = Selector('#price-value-4');
        this.productQuantity = Selector('#product_enteredQuantity_4');
        this.addToCartButton = Selector('#add-to-cart-button-4');
        this.notificationSuccessfull = Selector('.bar-notification.success');
    }
}

export default new ProductDetails();