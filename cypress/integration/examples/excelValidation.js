/// <reference types="cypress"/>
let productName;
const neatCSV = require('neat-csv')


describe('JWT session', function () {
    it('is logged in through local storage', function () {
        // You have to manually resolve the promise for your custom commands
        cy.LoginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            })


        });

        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })
        // End to End Place an order
        cy.get('.card-body button:last-of-type').eq(1).click(); // click on add to cart button
        cy.get('[routerlink$="/dashboard/cart"]').click();
        cy.contains('Checkout').click();
        // const selectCntry = " India";
        cy.get('[placeholder$="Select Country"]').type("ind");
        cy.wait(3000); // wait to load every options
        cy.get('.ta-results button').each((element, index, list) => {
            // const cntryName = element.text();

            if (element.text() === " India") {
                cy.wrap(element).click();
            }
        });
        cy.get('.btnn').click({ force: true });

        cy.wait(2000); // add wait time just to make sure that each and every details are first loaded
        cy.contains('Click To Download Order Details in Excel').click();

        // // Cypress.config("fileServerFolder"); // this fileServerFolder object will give you the path of your project
        // cy.readFile(Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_anerrtest.csv').then(async function (text) {
        //     const csv = await neatCSV(text);
        //     console.log(csv);
        //     cy.log(csv);
        //     const actualProductName = csv[0]["Product Name"];
        //     expect(productName).to.equal(actualProductName);
        // });

        const filePath = Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_anerrtest.xlsx';
        cy.task('excelToJsonCoverter',filePath).then(function(result){
            cy.log(result.data[1].A);
            expect(productName).to.equal(result.data[1].B);
        })

        cy.readFile(filePath).then(function(text) {
            expect(text).to.include(productName);
        })
        // cy.log(result);
        // console.log(result[0]["Product Name"]);

    })
})