/// <reference types = "cypress"/>

describe('upload-download test suite', function() {
    it('verify excel upload-download', function() {

        const replaceText = 399;
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
        cy.get('#downloadButton').click();
        const path = Cypress.config("fileServerFolder") + '/cypress/downloads/download.xlsx';
        cy.task('writeExcel', {searchText:"Apple", setValue:replaceText, change:{rowChange:0, colChange:2}, filePath:path});
        cy.get('#fileinput').selectFile(path);
        cy.contains('Apple').parent().parent().find('#cell-4-undefined').should('have.text',replaceText);
    })
})