import { Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.emailInput = Selector('#Email');
        this.passwordInput = Selector('#Password');
        this.submitButton = Selector('.login-button')
    }
}

export default new LoginPage();