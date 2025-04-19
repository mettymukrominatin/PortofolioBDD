// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../e2e/page_objects/login.page';

Cypress.Commands.add('login', (username, password) => {
  // const loginPage = new LoginPage();

  LoginPage.visitURL();
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.signIn();
});

Cypress.Commands.add('searchbox', (keyword) => {
  cy.get('#searchTerm').type(`${keyword}{enter}`);
});