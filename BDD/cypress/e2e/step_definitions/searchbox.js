import SearchboxPage from '../page_objects/searchbox.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');


Given('I open the index page', () => {
    SearchboxPage.visit();
})

When('I enter valid keyword in the searchbox', () => {
    SearchboxPage.searchValidKeyword('online banking');
    SearchboxPage.pressEnter();
})

Then('I should see search results of valid keyword', () => {
    cy.wait(2000);
    cy.get('div.top_offset').should('contain.text','The following pages were found for the query: online banking')
})

When('I enter invalid keyword in the searchbox', () => {
    SearchboxPage.searchInvalidKeyword('qwerty');
    SearchboxPage.pressEnter();
})

Then('I should see search results of invalid keyword', () => {
    cy.wait(2000);
    cy.get('div.top_offset').should('be.visible')
})