import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { getCustomConfig } from '../../stroer-core/config';
import LoginPage from '../../stroer-core/pages/LoginPage';

const customConfig = getCustomConfig();
const baseUrl = customConfig.baseUrl;

let productPrice, productTotal;

Given('Open Amazon Shopping Front Page', () => {
  cy.visit(baseUrl);
});

Then('Search for product {string} in Product SearchBar', (productName) => {
  cy.get('#twotabsearchtextbox').type(productName);
  cy.get('#nav-search-submit-button').click();
});

When('Select First Product from Search Result', () => {
  cy.get('div[data-cel-widget="search_result_2"]').find('a[class="a-link-normal s-no-outline"]').invoke('removeAttr', 'target').click();
  cy.url().should('include', 'https://www.amazon.in/');
});

Then('Add the Quantity to {string} Add Prodcut to Card', (productCount) => {
  cy.get('select[name="quantity"]').select(1).invoke('val').should('eq', productCount);
  cy.get('#add-to-cart-button').click();
});

Then('Go to Cart Page', () => {
  cy.get('a[class="a-button-text"]').contains('Go to Cart').click({ force: true });
  cy.url().should('contains', '/cart/');
});

Then('Validate the Price of Product for {string} Items', (productCount) => {
  LoginPage.waitForUpdate();
  cy.get('div[class="sc-item-price-block"]').then(($pPrice) => {
    productPrice = $pPrice.text().trim();
    cy.get('span[id="sc-subtotal-amount-activecart"]').then(($pTotal) => {
      productTotal = $pTotal.text().trim();
      expect(productTotal.replace(',', '')).to.eq((productPrice * parseInt(productCount)).toFixed(2));
    });
  });
});

Then('Reduce the Quantity to {string} Update the Cart', (productCount) => {
  cy.get('select[name="quantity"]').select(1, { force: true }).invoke('val').should('eq', productCount);
});
