describe('Amazon Product Search Test', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.co.uk')
    });
      
    it('Search for a product', () => {
      cy.fixture('products.json').then((productData) => {
        var product = productData.product
        var brand = productData.brand
        var category = productData.category
        cy.clearCookies()
        cy.get("#twotabsearchtextbox").type(category)
        cy.get("#nav-search-submit-button").click()
        cy.url().should('include', "Mobile+phones")
        cy.setCookie(
          "cookies_consent",
          JSON.stringify({ cookies_analytics: "granted", cookies_marketing: "granted" })
        );
        cy.get("#sp-cc-accept").click()
        cy.get('.a-size-base.a-color-base')
        .contains(brand)
        .click()
        cy.get('.s-main-slot.s-result-list.s-search-results.sg-row')
        .contains(product)
        .click()
        cy.get('#productTitle')
        .should('contain', product)
    });
  });
});