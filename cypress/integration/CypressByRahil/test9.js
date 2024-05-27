describe('Login & Registration test suite', function () {
    const email = "thetester120@gmail.com";
    const password = "TheTester@123";

    // Positive test case
    it('Registration with new user test case', function () {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        cy.get('#main-navigation .navbar-nav .nav-item a .info').contains('My account').click();
        cy.get('.card-body.p-4 a').contains('Continue').click();
        cy.get('#input-firstname').type('The');
        cy.get('#input-lastname').type('Tester');
        cy.get('#input-email').type(email);
        cy.get('#input-telephone').type('1234567810');
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);
        cy.get('#input-agree').click({ force: true });
        cy.get('input[value="Continue"]').click();
        cy.contains(' Your Account Has Been Created!').should('be.visible');
        cy.get('.buttons a').click();
        cy.get('.list-group.mb-3 a').contains(' Logout').click();

    })

    

    // Login with newly created user
    it('Login with new user test case', function () {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
        cy.get('.list-group.mb-3 a').first().contains(' Login').click();
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('input[value="Login"]').click();
        cy.url().should('include','/index.php?route=account/account');
    })

    it('Logout from user dashboard', function(){
        
    })


    // Negative test case
    it('Registration with existing user test case', function () {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        cy.get('#main-navigation .navbar-nav .nav-item a .info').contains('My account').click();
        cy.get('.card-body.p-4 a').contains('Continue').click();
        cy.get('#input-firstname').type('The');
        cy.get('#input-lastname').type('Tester');
        cy.get('#input-email').type(email);
        cy.get('#input-telephone').type('1234567810');
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);
        cy.get('#input-agree').click({ force: true });
        cy.get('input[value="Continue"]').click();
        cy.contains(' Warning: E-Mail Address is already registered!').should('be.visible');
    })

    
})