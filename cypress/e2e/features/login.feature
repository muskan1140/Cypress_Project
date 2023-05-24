Feature: Login page

    Feature Login page will work depending on the user credentials.

    Scenario: Success Login
        Given I am on the homepage
        And User should see the "login button"
        When User enters "email" email in email input field
        And User enters "password" password in password input field
        And User clicks on "Login" login button


    # Scenario Outline: Login Page with invalid credentials
    #     Given User is on My Doctor "homepage"
    #     And User should see the "login button"
    #     When User clicks on "Login button"
    #     Then User should redirected to "login page"
    #     When User enters "Email" in "email" input field
    #     And User enters "password" in "password" input field
    #     But sign in button is not present
    #     And forgot password is present on screen
    #     But after filling wrong credentials home page is not displayed
    #     Then User should see the pop up "message" message

    #         Examples :
    #         | Email             | password  | message                                                         |
    #         | user123@gmail.com | 123456789 | Mobile Number/Email or password is incorrect. Please try again. |
    #         | .com              | 123456    | Mobile Number/Email or password is incorrect. Please try again. |
    #         | 12.com            | 123       | Mobile Number/Email or password is incorrect. Please try again. |

