class ProductPage {
    getProductName() {
        return cy.get('h4.card-title');
    }

    getCartButton() {
        return cy.get('button.btn.btn-info');
    }
    
    getCheckoutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    getCheckout() {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn');
    }

    getCountryInputField() {
        return cy.get('#country');
    }

    getSuggestions() {
        return cy.get('.suggestions > ul > li > a');
    }

    getCheckBox() {
        return cy.get('#checkbox2');
    }

    getPurchase() {
        return cy.get('.ng-untouched > .btn');
    }

    getOrderSuccessMsg() {
        return cy.get('.alert');
    }

    getTotalPrice() {
        return cy.get('tr td:nth-child(4) strong');
    }
}

export default ProductPage;