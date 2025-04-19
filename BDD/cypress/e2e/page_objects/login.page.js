class LoginPage {
    static visitURL() {
        cy.visit('http://zero.webappsecurity.com/login.html');
    }

    static fillUsername(username) {
        cy.get('#user_login').clear().type(username)
    }

    static fillPassword(password) {
        cy.get('#user_password').clear().type(password)
    }

    static signIn() {
        cy.get('input[name="submit"]').click()
    }

    static errorMessage() {
        return cy.get('.alert-error') // Menggunakan return karena assertion get alert error
    }
}

export default LoginPage;

// note jika memanggil new loginpage hilangkan static