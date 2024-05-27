/// <reference types = "cypress" />

describe('window popups test suite', function() {
    it('open link through popup test case', function() {
        cy.visit('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

        // two ways are there to handle link window popup 
        // 1. using invoke and then as below
        // 2. using invoke by removing target attribute from it.


        // cy.get('.container a').contains('Follow On Twitter').invoke('attr', 'href').then((link)=>{
        //     cy.visit(link);
        // });

        cy.wait(2000);
        // cy.go('back'); // this go function has two attribute [back, forward] used to go back to previous page and next page.
        cy.wait(2000);
        
        cy.get('.container a').contains('Like us On Facebook').invoke('attr', 'href').then((link)=>{
            cy.visit(link);
        });

        cy.wait(2000);
        cy.go('back');
        cy.wait(2000);

        // cy.get('.container a').contains('Follow us On Linkedin').invoke('attr','href').then(function(link){
        //     cy.visit(link);
        // })

        // cy.wait(2000);
        // cy.go('back');

    })
})