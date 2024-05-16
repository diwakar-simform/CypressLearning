Feature: End To End Ecommerce Validation

    Ecommerce application where you can have shopping.

    @Reg
    Scenario: Ecommerce product delivery
        Given I open Ecommerce page
        When I add items to cart
        When Validate the total price
        Then Select the country submit and success message

    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
            |name |gender|
            |Nimit |Female|
        Then Validate the forms behaviour
        Then Select the shop page




    
