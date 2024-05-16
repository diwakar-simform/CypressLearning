// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Green Cart', function() {
    it('Visit Green Cart', function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');

        cy.wait(3000);
        
        // Step 1 : click on ADD TO CART
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
            const textVeg = $el.find('h4.product-name').text();

            if (textVeg.includes('Cashews'))  {
                cy.wrap($el).find('button').click();
            }
        });

        // Step 2 : Click on Cart Icon
        cy.get('.cart-icon > img').click();

        // Step 3 : Click on Proceed to Checkout Button
        // cy.get('.cart-preview > .action-block > button').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        // Step 4 : Click on Place Order
        // cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
        cy.contains('Place Order').click();

        // Assertions
        cy.get('.brand').should('have.text','GREENKART');
        // You have to handle promises by your own when you are using any non-cypress command like text();
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text());
        });

    })
})

