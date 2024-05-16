// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Green Cart', function() {
    it('Visit Green Cart', function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');

        cy.wait(3000);
        // assertions method
        // cy.get('.product').should('have.length',4);
        cy.get('.product:visible').should('have.length',4);
        // console.log("HI");
        // cy.log('hgj')

        // Parent-Child chaining
        cy.get('.products').find('.product').should('have.length',4);

        // // How to click in cypress
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        // cy.get('.products').find('.product').eq(2).contains('+').click();
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        // // cy.get('.products > :nth-child(4)').contains('ADD TO CART').click(); // clicking by using cyrpess inspect tool


        // const numOfClicks = 5;
        // // Method 1 : For multiple Clicks
        // for (let i = 0; i < numOfClicks; i++) {
        //     cy.get(':nth-child(4) > .stepper-input > .increment').click();
        // }

        // // Method 2 : Define a custom Cypress command to perform multiple clicks
        // Cypress.Commands.add('multiClick', { prevSubject: true }, (subject, numClicks) => {
        //     for (let i = 0; i < numClicks; i++) {
        //         cy.wrap(subject).click();
        //     }
        // });

        // // Using cusotmized created command : "multiClick(5)"
        // cy.get(':nth-child(4) > .stepper-input > .increment').multiClick(5);
        
        // cy.get(':nth-child(4) > .product-action > button').click(); // directly clicking on ADD TO CART button using cypress inspect tool

        // How to click by based on product name
        // How to iterate through each element

        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
            const textVeg = $el.find('h4.product-name').text();

            if (textVeg.includes('Cashews'))  {
                cy.wrap($el).find('button').click();
            }
        });

        // Assertions
        cy.get('.brand').should('have.text','GREENKART');
        // You have to handle promises by your own when you are using any non-cypress command like text();
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text());
        });

    })
})

