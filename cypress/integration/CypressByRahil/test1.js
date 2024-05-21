describe('selenium-playground', function() {
    it('input-form-demo', function() {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        // cy.url().should('equal','https://www.lambdatest.com/selenium-playground/input-form-demo');
        // // cy.url().should('have.value','https://www.lambdatest.com/selenium-playground/input-form-demo');
        // cy.url().should('equal','https://www.lambdatest.com/selenium-playground/input-form-demo');
        // cy.log(cy.url());

        // cy.get('#name').type('Diwakar Kumar');
        // cy.get('#inputEmail4').type('diwakar@gmail.com');
        // cy.get('#inputPassword4').type('diwakar@123');
        // cy.get('#company').type('Simform');
        // cy.get('#websitename').type('https://www.simformsolutions.com');
        // cy.get('[name="country"]').select('India');
        // cy.get('#inputCity').type('Ahmedabad');
        // cy.get('#inputAddress1').type('501 Binori Bsquare 2');
        // cy.get('#inputAddress2').type('Antariksh Colony');
        // cy.get('#inputState').type('Gujarat');
        // cy.get('#inputZip').type("380015");
        // cy.get('button[type="submit"]').last().click();
        // cy.contains('Thanks for contacting us, we will get back to you shortly.').should('be.visible');

        cy.wait(2000);
        cy.reload();
        cy.wait(2000);
        cy.log(cy.title());
        cy.title().then(function(webTitle) {
            cy.log(webTitle);
        })
        cy.log("Diwakar");
        
    })
})