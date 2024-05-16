// cypress: test file or spec file same
/// <reference types="Cypress" />


describe('Automation Practice', function() {
    it('UI Web Controls', function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // CHECKBOXES

        // For selection check boxes we use check();
        // You can use click() but for checkboxes check() is more reliable
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption2').check().should('be.checked');

        // cy.wait(2000);
        // If you want to call should multiple times you can use and it will consider same
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3');

        // cy.wait(2000);
        // suppose If I want to uncheck() and check that it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // Let's try to fail the above assertions
        // cy.get('#checkBoxOption1').uncheck().should('be.checked');

        // cy.wait(2000);
        // How to uncheck each at once
        // By using common propery we cna do so.
        cy.get('input[type="checkbox"]').uncheck(['option2', 'option3']);

        // cy.wait(2000);
        // You can check each at once or selected 
        cy.get('input[type="checkbox"]').check(['option1','option2']);
        // cy.wait(2000);
        cy.get('input[type="checkbox"]').check().should('be.checked');
        

        // STATIC DROP DOWNS
        // In get() method you can pass tagname or tagId and
        // In select() method you can pass particular value that you wanted to select 
        cy.get('select').select('option1').should('have.value','option1');


        // DYNAMIC DROP DOWNS
        // You only need to give space to navigate from Parent to child : from input
        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($el, index, $list)=> {
            if ($el.text() === "India") {
                cy.wrap($el).click();
            }
        });

        cy.get('#autocomplete').should('have.value','India');

        
        
        cy.get('#autocomplete').clear().type('uni');
        cy.wait(2000); // We have given here wait time intentionally because when it was trying to fetch the typed data then
        // It was picking up the previous drop down because of the fast speed. So when we have put down wait time so in that dropdown 
        //for new search got in the drop and hence select the appropriate option
        cy.get('.ui-menu-item div').each(($element, index, $list)=> {
            cy.log($element.text())
            if ($element.text() === "United Kingdom (UK)") {
                cy.log("hello")
                
                cy.wrap($element).click();
            }
        });

        // cy.get('#autocomplete').should('have.value','United Kingdom (UK)');

        // How to clear already filled in the input text : You can use clear() method


        // How to handle visible and invisible in cypress
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // Radio Button similar as Checkboxes
        cy.get('input[value="radio2"]').check().should('be.checked');

    })

    it('Alert',function() {
        cy.viewport(1920,1080);
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Cypress automatically handles alert and confirm by cliking on OK.
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
    })
})

