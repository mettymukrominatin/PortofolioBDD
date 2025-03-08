const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGN_IN = 'Sign in';

class LoginPage {
    static visit() {
        cy.visit(URL);
    }

    static fillValidUsername(username) {
        cy.get(USERNAME).clear().type(username)
    }

    static fillValidPassword(password) {
        cy.get(PASSWORD).clear().type(password)
    }

    static fillInvalidUsername(metty) {
        cy.get(USERNAME).clear().type(metty)
    }

    static fillInvalidPassword(password) {
        cy.get(PASSWORD).clear().type(password)
    }

    static signIn() {
        cy.contains(SIGN_IN).click()
    }
}

export default LoginPage;