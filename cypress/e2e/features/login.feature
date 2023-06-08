Feature: Login page


    Scenario Outline: Login with valid credentials
        Given User is on the "home" page
        When User clicks on login button
        When User enters "<email>" in email input field
        And User enters "<password>" in password input field
        And User clicks on submit button
        Then User should navigates to the homepage

        Examples:
            | email | password |
            | email | password |


    Scenario Outline: Login with invalid credentials
        Given User is on the "home" page
        When User clicks on login button
        When User enters "<userEmail>" in email input field
        And User enters "<password>" in password input field
        And User clicks on submit button
        Then User should see the "<Errormessage>" messsage

        Examples:
            | userEmail    | password        | Errormessage                                                    |
            | invalidEmail | invalidpassword | Mobile Number/Email or password is incorrect. Please try again. |
