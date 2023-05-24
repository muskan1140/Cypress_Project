Feature: Patient-Signup Page

    Scenario Outline: Patient Signup Page with valid credentials
        Given User is on Doctor landing page
        When User clicks on "Patient Sign up"
        Then patient signup window occur
        When User enters "Fullname" in name input field
        And User selects the "gender" gender
        And User enters the "date of birth" in DOB input field
        And User enters the "Mobile" in Mobile number input field
        And User enters the "Email" in Email input field
        And User creates "Password" in create password input field
        And User re enters the "Password" in confirm password input field
        Then User Enters the "register" register button
        
        Examples:
            | Page type       | Fullname | gender | date of birth | Mobile Number | Email             | Password | repeatPassword | Description
            | Patient Sign up | Ankit    | Male   | 3/6/2016      | 9156234567    | test123@gmail.com | 123456   | 123456         | Patient Signup