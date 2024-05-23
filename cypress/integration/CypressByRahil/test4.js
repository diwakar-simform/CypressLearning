/// <reference types = "cypress" />
// Learn about Hooks in cypress

describe('hooks test suite', function() {
    before(function(){
        // You can write some pre-requiste kind of thing before running all test cases
        cy.log('Hi, I am before');
    });

    beforeEach(function() {
        // Let's say if you have to visit same url to perform the each test cases then you can put that in your beforeEach method as below
        cy.visit('/selenium-playground/');
        cy.log('Hi, I am beforeEach');
    });

    it('hooks test cases', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it('2', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it('3', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it('4', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it('5', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })
    it('6', function() {
        // cy.visit('https://www.lambdatest.com/selenium-playground/');
    })

    after(function() {
        // You can use after to clearAllCookies after all test cases run completely
        cy.clearAllCookies();
    })

    afterEach(function() {
        // You can use this to clear session storage after ach test case
        cy.clearAllSessionStorage();
    })
})

describe('file-upload test suite', function() {
    it('file-upload test cases', function() {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo');
        // Two ways are there to upload file in cpyress i.e. selectFile() from cypress and attachFile() from npmjs
        // cy.get('#file').selectFile(Cypress.config('fileServerFolder')+ '/cypress/fixtures/upload-download.xlsx');
        cy.log(Cypress.config('fileServerFolder'));

        cy.get('#file').attachFile('upload-download.xlsx');
    });

    it('drag-drop test case', function() {
        cy.visit('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo');
        cy.get('#droppable').attachFile('users.json', { subjectType: 'drag-n-drop' });
    });


    it('drag-drop test case 2', function() {
        cy.visit('https://codyhouse.co/ds/components/app/drag-drop-file');
        cy.wait(10000);
        // cy.get('#upload-file').attachFile('users.json', { subjectType: 'drag-n-drop' });
    })
})
