import LoginPage from '../page_objects/login.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

// const loginPage = new LoginPage();

Given('I open the login page', () => {
    cy.wait(2000);
    LoginPage.visitURL();
})

When('I submit valid login', () => {
    cy.fixture("users").then((data) => {
        LoginPage.fillUsername(data.validUser.username);
        LoginPage.fillPassword(data.validUser.password);
        cy.wait(2000);
        LoginPage.signIn();
    });
})

Then('I should see the homepage', () => {
    cy.wait(2000);
    cy.get('#account_summary_tab > a').should('be.visible')
})

When('I submit invalid login', () => {
    cy.fixture("users").then((data) => {
        LoginPage.fillUsername(data.invalidUser.username);
        LoginPage.fillPassword(data.invalidUser.password);
        cy.wait(2000);
        LoginPage.signIn();
    });
})

Then("I should see an error message", () => {
    LoginPage.errorMessage().should('be.visible').and("contain", "Login and/or password are wrong.");
})