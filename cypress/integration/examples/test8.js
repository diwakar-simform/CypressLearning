// How to handle child window in cypress
// button link : child window or child tab
// Solution 1: remove target attribute
// Solution 2: href attribute 
            //  cy.visit(url)

/// <reference types="Cypress" />

describe('Child Window', function() {
    it('Child Windows Test case', function() {
        cy.viewport(1980,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // cy.get('#opentab').invoke('attr','href','https://javatpoint.com').invoke('removeAttr','target').click();;

        // click on the open tab
        cy.get('#opentab').then(function(element) {
            cy.get('#opentab').invoke('attr','href','https://www.geeksforgeeks.org/').invoke('removeAttr','target').click();

            cy.origin('https://www.geeksforgeeks.org/', ()=>{
                // You can write here your new domain codes
            }) 
        }) 

    })
})

// Note : Cypress won't allow to work on the new domain from the main parent domain.
// Because new domain becomes out of scope for the cypress
// Note : Cypress won't support cross domain BY DEFAULT. But you handle it alternatively