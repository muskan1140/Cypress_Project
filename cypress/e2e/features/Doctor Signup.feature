Feature: Doctor-Signup Page

    Scenario: Doctor Signup Page with valid credentials
        Given User is on Doctor landing page
        When User clicks on "Doctor Sign up"
        Then doctor signup window occur
        When User enters "Fullname" in name input field
        And User selects the "genderType" gender
        And User enters the "Mobile Number" in Mobile number input field
        And User enters the "Email" in Email input field
        And creates "Password" in create password input field
        And User enters the "Password" in confirm password input field
        Then User Enters the "register" register button

        Examples:
            | Page type      | Fullname | gender | Mobile Number | Email             | Password | repeatPassword |Description
            | Doctor Sign up | Muskan   | Female | 9156234567    | test123@gmail.com | 123456   | 123456         |Doctor Sign up