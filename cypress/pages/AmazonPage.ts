export class AmazonPage {
    visit() {
      cy.visit('https://www.amazon.co.uk');
    }
  
    searchForProduct(productCategory: string) {
      cy.get('#twotabsearchtextbox').should('be.visible').type(`${productCategory}{enter}`);
      cy.get("#sp-cc-accept").click()
    }
  
    getProductAndBrand() {
      return cy.get('.a-size-large.product-title-word-break')
        .then((elements) => {
          const productDetails: Array<{ brand: string; name: string }> = [];
          elements.each((index, el) => {
            const productName = Cypress.$(el).text();
            const brandName = productName.split(' ')[0]; // Assuming the brand is the first word
            productDetails.push({
              brand: brandName,
              name: productName,
            });
          });
          return productDetails;
        });
    }
  }