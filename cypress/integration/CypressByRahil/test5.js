// Environment variable and baseURL

/// <reference types = "cypress"/>

describe('env & baseUrl test suite', function() {
    it('env test case', function() {
        cy.log(Cypress.env('url'));
        cy.screenshot(); // to take screenshots
    })

    it ('baseUrl test case', function() {
        cy.visit('/selenium-playground/');
    })
})