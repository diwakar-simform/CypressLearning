class HomePage {
    getNameField() {
        return cy.get(':nth-child(1) > .form-control');
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1');
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched');
    }
    
    getEntrepreneur() {
        return cy.get('#inlineRadio3');
    }

    getShop() {
        return cy.get(':nth-child(2) > .nav-link');
    }
}

export default HomePage;