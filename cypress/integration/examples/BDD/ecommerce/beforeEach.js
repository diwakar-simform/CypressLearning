// all setup related thing done in before method like getting data from fixtures
beforeEach( function(){
    cy.fixture('example').then(function(data) {
        this.data = data;
    }) 
})