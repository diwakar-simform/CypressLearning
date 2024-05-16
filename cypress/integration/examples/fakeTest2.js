/// <reference types="cypress" />

describe('Modify http Request test suite', function () {
    it('Modify Http Request', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // First recieving the request
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            // When request recieved modify your request
            (req) => {
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

                // then with the help of continue() now again send back request with new url and check status code
                req.continue((res) => {
                    // expect(res.statusCode).to.equal(403);
                })
            }
        ).as('dummyUrl');

        cy.get('button[class="btn btn-primary"]').click();
        cy.wait('@dummyUrl');

    })
})