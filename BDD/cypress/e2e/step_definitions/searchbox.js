import SearchboxPage from '../page_objects/searchbox.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

let keyword = ''; // Menggunakan let jika value dapat berubah karena berupa keyword

Given('I open the index page', () => {
    SearchboxPage.visitURL();
})

When('I enter valid keyword in the searchbox', () => {
    cy.fixture('search').then((data) => {
        keyword = data.validKeyword;
        cy.searchbox(keyword);
    });
    cy.wait(2000);  
})

Then('I should see search results of valid keyword', () => {
    SearchboxPage.validSearch().should('be.visible')
})

When('I enter invalid keyword in the searchbox', () => {
    cy.fixture('search').then((keyword) => {
        keyword = keyword.invalidKeyword;
        cy.searchbox(keyword);
    });
    cy.wait(2000);
})

Then('I should see search results of invalid keyword', () => {
    SearchboxPage.invalidSearch().should('be.visible')
})