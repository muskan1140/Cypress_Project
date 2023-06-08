Feature: Patient-Signup Page

    Scenario Outline: Patient signup with valid credentials
        Given User is on the "patient signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User selects "<date>" "<month>" "<year>" in the dob select field
        And User enters the "<mobileNum>" in mobile number input field
        And User enters the email in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User clicks on the "register" button

        Examples:
            | fullname      | gender | date | month   | year | password | confirmPassword |
            | Ankit Mahajan | Male   | 1    | January | 2000 | User@123 | User@123        |



    Scenario Outline: Patient signup with invalid password
        Given User is on the "patient signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User selects "<date>" "<month>" "<year>" in the dob select field
        And User enters the "<mobileNum>" in mobile number input field
        And User enters the email in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the  "<Error Message>" message

        Examples:
            | fullname     | gender | date | month   | year | password | confirmPassword | Error Message                                |
            | Ankit Jamwal | Male   | 1    | January | 2000 | Use@1    | Use@1           | Must contain at least 6 characters.          |
            | Ankit Jamwal | Male   | 1    | January | 2000 | Use123   | Use123          | Must contain at least one special character. |
            | Ankit Jamwal | Male   | 1    | January | 2000 | User@2   | User@2          | Must contain uppercase letter.               |
            | Ankit Jamwal | Male   | 1    | January | 2000 | User@k   | User@k          | Must contain at least one number.            |
            | Ankit Jamwal | Male   | 1    | January | 2000 | USE@12   | USE@12          | Must contain lowercase letter.               |
            | Ankit Jamwal | Male   | 1    | January | 2000 | User@112 | Use112          | Passwords must match                         |


    Scenario Outline: Patient signup with invalid name and email
        Given User is on the "patient signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User selects "<date>" "<month>" "<year>" in the dob select field
        And User enters the "<mobileNum>" in mobile number input field
        And User enters users "<email Id>" in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the  "<Error Message>" message

        Examples:
            | fullname | gender | date | month   | year | email Id          | password | confirmPassword | Error Message                        |
            | Ankit.1  | Male   | 1    | January | 2000 | User123@gmail.com | User@123 | User@123        | Please enter a valid name!           |
            | Ankit+1  | Male   | 1    | January | 2000 | User123@gmail.com | User@123 | User@123        | Please enter a valid name!           |
            | Ankit    | Male   | 1    | January | 2000 | Use.com           | User@123 | User@123        | Please enter a valid e-mail address! |
            | Ankit    | Male   | 1    | January | 2000 | Use12@            | User@123 | User@123        | Please enter a valid e-mail address! |


    Scenario Outline: Patient signup with invalid mobile number
        Given User is on the "patient signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User selects "<date>" "<month>" "<year>" in the dob select field
        And User enters the "<mobileNumber>" in mobile input field
        And User enters users "<email Id>" in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the message "<message>"

        Examples:
            | fullname | date | month   | year | email Id             | password | confirmPassword | mobileNumber | message                                     |
            | Ankit    | 1    | January | 2000 | Test123@gmail.com    | User@123 | User@123        | 9863567      | Please enter a valid 10-digit mobile number |
            | Ankit    | 1    | January | 2000 | Testuser21@gmail.com | User@123 | User@123        | 975@1231     | Please enter a valid 10-digit mobile number |



    # Scenario Outline:User is not able to register with existing mobile number & email
    #     Given User is on the "patient signup" page
    #     When User enters "<fullname>" in name input field
    #     And User selects the "<gender>" gender
    #     And User selects "<date>" "<month>" "<year>" in the dob select field
    #     And User enters the "<mobileNumber>" in mobile input field
    #     And User enters the email in email input field
    #     And User enters the "<password>" in create password input field
    #     And User re-enters the "<confirmPassword>" in confirm password input field
    #     When User clicks on the "register" button
    #     Then User can view message "Signed up successfully!"
    #     And User enter users data in the "mobileNumber" input field
    #     And User enter users data in the "Email" input field
    #     And User enters value "<password>" in the "Password" input field
    #     When User clicks on the "register" button
    #     Then User can view message "Signed up successfully!"
    #     And  User enters the "<mobileNumber>" in mobile input field
    #     And User enters the email in email input field
    #     And User enters value "<password>" in the password input field
    #     Then User can view the "<error Message>"

    #     Examples:
    #         | fullname     | date | month   | year | mobileNumber | password | confirmPassword | gender | error Message                 |
    #         | Hunter Brown | 1    | January | 2000 | 9146325456   | User@123 | User@123        | Male   | Mobile number already exists! |



