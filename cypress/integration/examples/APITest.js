/// <reference types="cypress"/>

describe('Api Test Suite', function() {
    it('API Test cases', function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Appium automation with java",
            "isbn":"bcdss",
            "aisle":"22s7", 
            "author":"John doe"
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added");
            expect(response.status).to.eq(200);
        })
    })
})