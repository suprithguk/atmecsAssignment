/// <reference types="cypress" />
import { AmazonPage } from '../../pages/AmazonPage';

describe('Amazon Product Search Test', () => {
  const amazonPage = new AmazonPage();

  beforeEach(() => {
    // Visit Amazon UK website
    amazonPage.visit();
  });

  afterEach(() => {
    // Clear cookies and local storage after each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Search for product and assert on the results page', function () {
    cy.fixture('products.json').then((productData) => {
      var product = productData.product
      var brand = productData.brand
      var category = productData.category
      cy.log(`Searching for ${product} by ${brand}`);
      amazonPage.searchForProduct(category);
      cy.get('.a-size-base.a-color-base')
      .contains(brand)
      .click()
      cy.get('.s-main-slot.s-result-list.s-search-results.sg-row')
      .contains(product)
      .click()
      amazonPage.getProductAndBrand().then((productDetails) => {
        expect(productDetails).to.exist;
        expect(productDetails.length).to.be.greaterThan(0);
      });
    });
  });
});