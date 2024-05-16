describe('Calendar Testing', ()=> {
    it('Verify Date Selection', ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

        // My Requirement
        const dateNumber = "15";
        const monthNumber = "6";
        const yearNumber = "2027";
        const expectedList = [monthNumber, dateNumber, yearNumber];

        // Solution Steps
        cy.get('.react-date-picker__calendar-button').click(); // Click on icon to get the Calendar open
        cy.get('.react-calendar__navigation__label').click(); // Click Upper middle section to go back to select month
        cy.get('.react-calendar__navigation__label').click(); // Click again upper middle section to go back to select year
        // cy.get('.react-calendar_tile').then((el)=>{
        //     cy.log(el.text());
        // })

        cy.contains("button",yearNumber).click();
        cy.get('.react-calendar__year-view__months__month').eq(monthNumber-1).click();
        cy.contains('abbr',dateNumber).click();

        cy.get('.react-date-picker__inputGroup__input').each((element, index) => {
            cy.wrap(element).invoke('val').should('eq',expectedList[index]);
        })

    })
})