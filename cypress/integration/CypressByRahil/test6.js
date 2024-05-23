/// <reference types = "cypress" />

describe('popups & alerts test suite', function() {
    it('popups and alerts test case', function() {
        // this is how we handle uncaught:exception
        cy.on('uncaught:exception', ()=> {
            return false;
        });
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
        
        cy.get('#alertexamples').click();
        cy.on('window:alert', function(res) {
            expect(res).to.contains('I am an alert box');
        });
        cy.get('#confirmexample').click();
        cy.on('window:confirm', function(res){
            expect(res).to.contains('I am a confirm alert');
        })
        cy.get('#promptexample').click();
    })
})