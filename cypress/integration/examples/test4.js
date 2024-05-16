// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Automation Practice', function() {
    it('Alert',function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Unique Quality of Cypress : Cypress can take over the control of your dom and give direction to your browser by manuplating your code
        // Whereas selenium can not do such things
        // Note : Entire our testing is running on MOCHA test framework
        // Cypress automatically handles alert and confirm by cliking on OK.
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        cy.on('window:alert', (str) => {
            // MOCHA
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm', (str) => {
            // MOCHA
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // SCOPE of cypress will be in the same tab : the url that you have provided in cy.visit();
        // If you are able to open the new tab in the current page itself then you are good to go.
    })
})

