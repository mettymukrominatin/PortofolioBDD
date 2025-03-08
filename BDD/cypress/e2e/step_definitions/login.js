import LoginPage from '../page_objects/login.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the login page', () => {
    LoginPage.visit();
})

When('I submit valid login', () => {
    LoginPage.fillValidUsername('username');
    LoginPage.fillValidPassword('password');
    LoginPage.signIn();
})

Then('I should see the homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible')
})

When('I submit invalid login', () => {
    LoginPage.fillInvalidUsername('metty');
    LoginPage.fillInvalidPassword('password');
    LoginPage.signIn();
})

Then('I should see an error message', () => {
    cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
})