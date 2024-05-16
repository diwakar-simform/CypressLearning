/// <reference types="cypress" />

describe('Mock http test suite', function() {
    it('Mock https requests', function() {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({ // REQUEST BODY monitoring only
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        { // RESPONSE BODY

            statusCode: 200,
            body: [
                {
                    book_name: "RestAssured with Java", 
                    isbn: "BSG",
                    aisle: "2302"
                }
            ]
        }).as('bookretrievals');

        cy.get('button[class="btn btn-primary"]').click();

        // Length of response array == rows of the table
        cy.wait('@bookretrievals').then(({request, response})=>{
            cy.get('tr').should('have.length',response.body.length+1);
        })

        cy.get('p').should('have.text','Oops only 1 Book available');
    })
})