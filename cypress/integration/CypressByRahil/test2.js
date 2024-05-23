describe('selenium-playground', function() {
    it('input-form-demo', function() {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
    

        cy.wait(2000);
        cy.reload(); // is used to reload your 
        cy.wait(2000);
        cy.log(cy.title());
        cy.title().then(function(webTitle) {
            cy.log(webTitle);
        })
        cy.log("Diwakar");

        // first is a function to get the first element required value
        // find() is used to get the sub element 
        // Note: You can not use cy.find() directly and we can use this find as much as we can
        cy.get('h4.title').first().find('a').then(function(txt) {
            cy.log(txt.text());
        }); 

        // we can use eq(1) to get the particul element : eq()
        // should is assertions
        // forEach loop, eql(), expect
        // What to do with shadow elements?

    })
})