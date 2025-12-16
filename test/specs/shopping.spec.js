import shoppingPage from '../pageobjects/shopping.page';
import { randomEmail, randomMobile, randomFirstName, randomLastName } from '../utility/random';

describe('Shopping Signup Test', () => {

    const loginURL = 'https://automationexercise.com/';

    const signupname = 'mike';
    const password = 'test';
    const firstname = randomFirstName();
    const lastname = randomLastName();
    const address = 'humphrey3';
    const state = 'illinois';
    const city = 'chicago';
    const zipcode = '10000';
    const mobile_number = randomMobile();

    before(() => {
        cy.visit(loginURL);
    });

    it('Sign up new user', () => {
        
        shoppingPage.signuplogin().click();

        shoppingPage.signupname().type(signupname);
        shoppingPage.signupemail().type(randomEmail());
        shoppingPage.signupbutton().click();

        shoppingPage.password().type(password);
        shoppingPage.firstname().type(firstname);
        shoppingPage.lastname().type(lastname);
        shoppingPage.address().type(address);
        shoppingPage.countrySelect("United States");
        shoppingPage.state().type(state);
        shoppingPage.city().type(city);
        shoppingPage.zipcode().type(zipcode);
        shoppingPage.mobilenumber().type(mobile_number);
        shoppingPage.createaccount().click();

        shoppingPage.accountcreated().should('be.visible');
        shoppingPage.continue().click();
    });

});
