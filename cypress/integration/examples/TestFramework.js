
import HomePage from "../PageObject/HomePage";
import ProductPage from "../PageObject/ProductPage";

describe('Ecommerce', function() {



    // all setup related thing done in before method like getting data from fixtures
    beforeEach( function(){
        cy.fixture('example').then(function(data) {
            this.data = data;
        }) 
    })

    it('proto',function(){
        const homePage = new HomePage();

        // cy.log(Cypress.env('url'));

        cy.visit(Cypress.env('url')+'/angularpractice/');

        homePage.getNameField().type(this.data.name); // replacement of below written code
        // cy.get(':nth-child(1) > .form-control').type(this.data.name);
        homePage.getGender().select(this.data.gender);

        // Assertions
        homePage.getTwoWayDataBinding().should('have.value',this.data.name);
        homePage.getNameField().should('have.attr','minLength','2');

        // cy.pause();
        homePage.getEntrepreneur().should('be.disabled');
        // cy.get('#inlineRadio3').should('be.disabled').debug();

        homePage.getShop().click();
        // cy.get('h4.card-title').each( function(element, index, list) {
        //     if (element.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
        // })

        // cy.selectProduct('Blackberry');
        // cy.selectProduct('Nokia Edge');

        this.data.productName.forEach(function(product) {
            cy.selectProduct(product);
        })

        const productPage = new ProductPage();

        const countryName = "United States of America";

        productPage.getCheckoutButton().click();
        
        var sum = 0;
        productPage.getTotalPrice().each(function(element, index, list){
            const totalPrice = element.text();
            var res = totalPrice.split(" ");
            res = res[1].trim();
            sum = sum + Number(res);
            cy.log(sum);
        }).then(function() {
            cy.log(sum);
            var finalSum = "₹. ";
            finalSum = finalSum + sum;
            cy.get('td[class="text-right"] h3 strong').should('have.text',finalSum);

        })

        cy.get('td[class="text-right"] h3 strong').then(function(element){
            const finalPrice = element.text();
            var result = finalPrice.split(" ");
            result = result[1].trim();
            expect(Number(result)).to.be.equal(sum);
        }) 
        

        productPage.getCheckout().click();
        productPage.getCountryInputField().type(countryName);
        // Cypress.config('defaultCommandTimeout',8000);
        Cypress.config('defaultCommandTimeout',8000); // spec level 
        // cy.wait(5000);
        productPage.getSuggestions().contains(countryName).click();
        productPage.getCheckBox().check({force:true});
        productPage.getPurchase().click();
        
        productPage.getOrderSuccessMsg().then(function(message) {
            const successMessage = message.text();
            expect(successMessage.includes('Success')).to.be.true; 
        })
        

        



    })


    // all cleaning and closing thing should be in after method like close the browser or clear data
    after(function() {

    })
})