class SearchboxPage {
    static visitURL() {
        cy.visit('http://zero.webappsecurity.com/index.html');
    }

    static validSearch() {
        return cy.get('h2');
    }
    
    static invalidSearch() {
        return cy.get('div.top_offset');
    }
}

export default SearchboxPage;