/* eslint-disable cypress/no-unnecessary-waiting */
class HomeSaucePage {
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('#login-button'),
    errorMessage: () => cy.get('h3[data-test="error"]')
  };

  typeUsername (username) {
    this.elements.usernameInput().type(username);
  }

  typePassword (password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin () {
    this.elements.loginBtn().click();
  }

  submitLogin (username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  waitForUpdate () {
    cy.wait(5000);
  }
}
module.exports = new HomeSaucePage();
