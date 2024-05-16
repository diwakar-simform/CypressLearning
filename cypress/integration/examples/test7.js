// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Automation Practice', function() {
    it('Alert',function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#mousehover').invoke('show'); // Parent element
        // cy.wait(2000);
        cy.contains('Top').click({force: true}); // Not recommended way
        // Note : show method of jQuery will only applied on immediate parent of hidden element as below
        
        cy.get('.mouse-hover-content').invoke('show');
        // cy.wait(2000);
        cy.get('a[href="#top"]').click(); // Normally we do this
        // cy.contains('Top').click({force: true}); // Not recommended way

        cy.url().should('include','top');
    })
})

