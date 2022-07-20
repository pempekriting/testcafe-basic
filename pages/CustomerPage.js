import { Selector } from 'testcafe';

class CustomerPage {
    constructor() {
        this.ordersLink = Selector('a').withExactText('Orders');
        this.noOrdersLabel = Selector('.no-data');
    }
}

export default new CustomerPage();