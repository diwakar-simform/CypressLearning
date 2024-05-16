// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import ProductPage from "../integration/PageObject/ProductPage";

const productPage = new ProductPage();
Cypress.Commands.add('selectProduct', function(productName) { 
    productPage.getProductName().each( function(element, index, list) {
        if (element.text().includes(productName)) {
            productPage.getCartButton().eq(index).click();
        }
    })
 })

 Cypress.Commands.add('LoginAPI', function() {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail":"anerrtest@gmail.com","userPassword":"Ecom@123"}).then(function(response){
        expect(response.status).to.eq(200);
        Cypress.env('token',response.body.token);
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })