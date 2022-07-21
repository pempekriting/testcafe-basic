const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun:testController})
}

exports.RegisterPage ={
    GenderButton: function() {
        return select('#gender-male');
    },

    FirstName: function() {
        return select('#FirstName');
    },

    LastName: function() {
        return select('#LastName');
    },
    
    DateOfBirth: function() {
        return select("select[name='DateOfBirthDay']");
    },

    MonthOfBirth: function() {
        return select("select[name='DateOfBirthMonth']");
    },

    YearOfBirth: function() {
        return select("select[name='DateOfBirthYear']");
    },

    Email: function() {
        return select('input#Email');
    },

    CompanyName: function() {
        return select('input#Company');
    },

    Password: function() {
        return select('input#Password');
    },

    ConfirmPassword: function() {
        return select('input#ConfirmPassword');
    },

    RegistrationButton: function() {
        return select('button#register-button');
    },

    SuccessFullMessage: function() {
        return select('.result');
    },

    ListOption: function() {
        return select('option');
    }

    // constructor() {
    //     this.genderMale = Selector('#gender-male');
    //     this.genderFemale = Selector('#gender-female');
    //     this.firstNameInput = Selector('input#FirstName');
    //     this.lastNameInput = Selector('input#LastName');
    //     this.dayDropdown = Selector("select[name='DateOfBirthDay']");
    //     this.dayToSelect = this.dayDropdown.find('option');
    //     this.monthDropdown = Selector("select[name='DateOfBirthMonth']");
    //     this.monthToSelect = this.monthDropdown.find('option');
    //     this.yearDropdown = Selector("select[name='DateOfBirthYear']");
    //     this.yearToSelect = this.yearDropdown.find('option');
    //     this.emailInput = Selector('input#Email');
    //     this.companyNameInput = Selector('input#Company');
    //     this.passwordInput = Selector('input#Password');
    //     this.confirmPasswordInput = Selector('input#ConfirmPassword');
    //     this.registerButton = Selector('button#register-button');
    //     this.successfullRegistration = Selector('.result');
    // }

    // async selectGender(gender) {
    //     if(gender === 'male') {
    //         await t
    //             .click(this.genderMale);
    //     } else {
    //         await t 
    //             .click(this.genderFemale);
    //     }
    // }

    // async selectDay(day) {
    //     await t
    //         .click(this.dayDropdown)
    //         .click(this.dayToSelect.withText(day));
    // }

    // async selectMonth(month) {
    //     await t
    //         .click(this.monthDropdown)
    //         .click(this.monthToSelect.withText(month));
    // }

    // async selectYear(year) {
    //     await t
    //         .click(this.yearDropdown)
    //         .click(this.yearToSelect.withText(year));
    // }
}