// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Automation Practice', function() {
    it('Alert',function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // This below code will remove the target attribute from the anchor tag.
        // Because of that our page will open in the same page no new tab or window
        cy.get('#opentab').invoke('removeAttr','target').click();

        // Cypress only support current domain 
        // If your domain get change while testing then cypress will start complaining it will not run test cases
        // In one word: Cross domain is not supported by Cypress

        // Not working : Because blocked site in the current network
        // cy.origin("https://www.qaclickacademy.com", () => {
        //     cy.get("#navbarSupportContent a[href*='about']").click();
        // })

            // Below code is dynamically changes the href value of the anchor tag and removing the target attribute from anchor tag
            cy.get('#opentab').invoke('attr','href','https://javatpoint.com').invoke('removeAttr','target').click();;
            // cy.go('back');
    })
})

