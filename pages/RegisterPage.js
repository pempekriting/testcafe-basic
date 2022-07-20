import { Selector, t } from "testcafe";

class RegisterPage {
    constructor() {
        this.genderMale = Selector('#gender-male');
        this.genderFemale = Selector('#gender-female');
        this.firstNameInput = Selector('input#FirstName');
        this.lastNameInput = Selector('input#LastName');
        this.dayDropdown = Selector("select[name='DateOfBirthDay']");
        this.dayToSelect = this.dayDropdown.find('option');
        this.monthDropdown = Selector("select[name='DateOfBirthMonth']");
        this.monthToSelect = this.monthDropdown.find('option');
        this.yearDropdown = Selector("select[name='DateOfBirthYear']");
        this.yearToSelect = this.yearDropdown.find('option');
        this.emailInput = Selector('input#Email');
        this.companyNameInput = Selector('input#Company');
        this.passwordInput = Selector('input#Password');
        this.confirmPasswordInput = Selector('input#ConfirmPassword');
        this.registerButton = Selector('button#register-button');
        this.successfullRegistration = Selector('.result');
    }

    async selectGender(gender) {
        if(gender === 'male') {
            await t
                .click(this.genderMale);
        } else {
            await t 
                .click(this.genderFemale);
        }
    }

    async selectDay(day) {
        await t
            .click(this.dayDropdown)
            .click(this.dayToSelect.withText(day));
    }

    async selectMonth(month) {
        await t
            .click(this.monthDropdown)
            .click(this.monthToSelect.withText(month));
    }

    async selectYear(year) {
        await t
            .click(this.yearDropdown)
            .click(this.yearToSelect.withText(year));
    }
}

export default new RegisterPage();