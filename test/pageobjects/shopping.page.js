class ShoppingPage {

     signuplogin() {
        return cy.get('[class="fa fa-lock"]');
    }

    signupname() {
        return cy.get('[data-qa="signup-name"]');
    }

    signupemail() {
        return cy.get('[data-qa="signup-email"]');
    }

    signupbutton() {
        return cy.get('[data-qa="signup-button"]');
    }

    password() {
        return cy.get('[data-qa="password"]');
    }

    firstname() {
        return cy.get('[data-qa="first_name"]');
    }

    lastname() {
        return cy.get('[data-qa="last_name"]');
    }

    address() {
        return cy.get('[data-qa="address"]');
    }

    country() {
        return cy.get('#country');
    }

    state() {
        return cy.get('[data-qa="state"]');
    }

    city() {
        return cy.get('[data-qa="city"]');
    }

    zipcode() {
        return cy.get('[data-qa="zipcode"]');
    }

    mobilenumber() {
        return cy.get('[data-qa="mobile_number"]');
    }

    createaccount() {
        return cy.get('[data-qa="create-account"]');
    }

    accountcreated() {
        return cy.get('[data-qa="account-created"]');
    }

    continue() {
        return cy.get('[data-qa="continue-button"]');
    }

    countrySelect(option) {
        this.country().select(option);
    }
}

export default new ShoppingPage();
