const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCHBOX = '#searchTerm';

class SearchboxPage {
    static visit() {
        cy.visit(URL);
    }

    static searchValidKeyword(online_banking) {
        cy.get(SEARCHBOX).clear().type(online_banking);
    }

    static searchInvalidKeyword(qwerty) {
        cy.get(SEARCHBOX).clear().type(qwerty);
    }

    static pressEnter() {
        cy.get(SEARCHBOX).type('{enter}');
    }
}

export default SearchboxPage;