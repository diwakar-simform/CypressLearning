const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../../PageObject/HomePage";
import ProductPage from "../../../PageObject/ProductPage";
// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Feature: End To End Ecommerce Validation

//     Ecommerce application where you can have shopping.

//     Scenario: Ecommerce product delivery

const homePage = new HomePage();
const productPage = new ProductPage();
const countryName = "United States of America";
var name;



//    Given I open Ecommerce page
Given('I open Ecommerce page', function () {
    cy.visit(Cypress.env('url') + '/angularpractice/');
});

//     When I add items to cart
When('I add items to cart', function () {
    homePage.getShop().click();
    this.data.productName.forEach(function (product) {
        cy.selectProduct(product);
    })

});

//     And Validate the total price
When('Validate the total price', function () {
    const countryName = "United States of America";

    productPage.getCheckoutButton().click();

    var sum = 0;
    productPage.getTotalPrice().each(function (element, index, list) {
        const totalPrice = element.text();
        var res = totalPrice.split(" ");
        res = res[1].trim();
        sum = sum + Number(res);
        cy.log(sum);
    }).then(function () {
        cy.log(sum);
        var finalSum = "₹. ";
        finalSum = finalSum + sum;
        cy.get('td[class="text-right"] h3 strong').should('have.text', finalSum);

    })

    cy.get('td[class="text-right"] h3 strong').then(function (element) {
        const finalPrice = element.text();
        var result = finalPrice.split(" ");
        result = result[1].trim();
        expect(Number(result)).to.be.equal(sum);
    })
});

//     Then Select the country submit and success message
Then('Select the country submit and success message', function () {
    productPage.getCheckout().click();
    productPage.getCountryInputField().type(countryName);
    // Cypress.config('defaultCommandTimeout',8000);
    Cypress.config('defaultCommandTimeout', 8000); // spec level 
    // cy.wait(5000);
    productPage.getSuggestions().contains(countryName).click();
    productPage.getCheckBox().check({ force: true });
    productPage.getPurchase().click();

    productPage.getOrderSuccessMsg().then(function (message) {
        const successMessage = message.text();
        expect(successMessage.includes('Success')).to.be.true;
    })
});



// Scenario: Filling the form to shop
// Given I open Ecommerce page
// When I fill the form details
When('I fill the form details', function (dataTable) {
    name = dataTable.rawTable[1][0];

    homePage.getNameField().type(dataTable.rawTable[1][0]); // replacement of below written code
    // cy.get(':nth-child(1) > .form-control').type(this.data.name);
    homePage.getGender().select(dataTable.rawTable[1][1]);
});

// Then Validate the forms behaviour
Then('Validate the forms behaviour', function () {

    // Assertions
    homePage.getTwoWayDataBinding().should('have.value', name);
    homePage.getNameField().should('have.attr', 'minLength', '2');

    // cy.pause();
    homePage.getEntrepreneur().should('be.disabled');
})

// And Select the shop page
Then('Select the shop page', function () {
    homePage.getShop();
})




