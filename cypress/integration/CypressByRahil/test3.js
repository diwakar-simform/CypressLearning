/// <reference types = "cypress" />
// fixture, clear, check, uncheck, scrollintoview, scrollto

// beforeEach() is one of the hook that you can use to reduce repetive code and to write more optimized code
beforeEach(function() {
    cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo');
});

describe("fixture, clear", function() {
    it('test cases', function() {
        cy.fixture("users").then(function(user) {
            cy.get('#name').type(user[0].name);
            // clear() is used to clear your input box filled value
            // It is good practice to use clear() method before typing anything in any input field,
            // because there might be possiblity of pre-filled values in the input field
            cy.get('#name').clear().type(user[1].name);
            cy.get('#inputEmail4').clear().type(user[0].email);
            cy.get('#inputPassword4').clear().type(user[0].password);
            cy.get('#company').clear().type(user[0].company);
            cy.get('#websitename').clear().type(user[0].website);
            cy.get('#inputCity').clear().type(user[0].city);
            cy.get('#inputAddress1').clear().type(user[0].address1);
            cy.get('#inputAddress2').clear().type(user[0].address2);
            cy.get('#inputState').clear().type(user[0].state);
            cy.get('#inputZip').clear().type(user[0].zipcode);
            // cy.get('select[name="country"]');
            cy.get('select[name="country"]').select("India");


        })
    })
});

// .only() is used to run only the it or describe
// .skip() is used to skip the particular it or describe
describe("check, uncheck", function() {
    it('test cases', function() {
        // cy.get('#isAgeSelected').click();
        // we can use both click & check in this but we check() is more preferred to target checkboxes
        cy.get('#isAgeSelected').check();
        cy.get('#isAgeSelected').uncheck(); // to uncheck the checked box.        
    })
});

describe("scrollintoview, scrollto", function() {
    it('test cases', function() {
        cy.get('a').contains('Start free with Email').scrollIntoView(); // we can got to particular section of the page    
        cy.scrollTo('top'); // You can set direction where you want to scroll like top, bottom, topLeft, bottomRight etc
        cy.scrollTo('bottom');
        cy.scrollTo('bottomLeft');
        cy.scrollTo('bottomRight');
        cy.scrollTo('center');
        cy.scrollTo('left');
        cy.scrollTo('right');
        cy.scrollTo('topLeft');
        cy.scrollTo('topRight');
        cy.scrollTo(300,500); // we can also set value horizontal, vertical respectively
    })
});

describe.only("scrollintoview, scrollto", function() {
    it('test cases', function() {
        // cy.get('#box').click();
        cy.get('#box').dblclick(); // If you want double click on any particular element then you can use this
        cy.log(cy.url());
    })
});