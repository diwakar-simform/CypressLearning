// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Automation Practice', function() {
    it('Alert',function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // navigating to the 2nd column
        cy.get('tr td:nth-child(2)').each((element, index, list) => {

            const course = element.text();
            if (course.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                }) 
            }
            
        }) 
    })
})

