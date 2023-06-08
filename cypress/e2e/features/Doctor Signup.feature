Feature: Doctor-Signup Page

    Scenario Outline: Doctor Signup with valid credentials
        Given User is on the "doctor signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User enters the "<mobileNum>" in mobile number input field
        And User enters the email in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User clicks the "register" button

        Examples:
            | fullname      | gender | password | confirmPassword |
            | Ankit Mahajan | Male   | User@123 |  User@123       |  


    Scenario Outline: Doctor signup with invalid password
        Given User is on the "doctor signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User enters the "<mobileNum>" in mobile number input field
        And User enters the email in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the  "<Error Message>" message

        Examples:
            | fullname     | gender | password | confirmPassword | Error Message                                |
            | Ankit Jamwal | Male   | Use@1    | Use@1           | Must contain at least 6 characters.          |
            | Ankit Jamwal | Male   | Use123   | Use123          | Must contain at least one special character. |
            | Ankit Jamwal | Male   | user@2   | user@2          | Must contain uppercase letter.               |
            | Ankit Jamwal | Male   | User@1   | User@1          | Must contain at least one number.            |
            | Ankit Jamwal | Male   | USE@12   | USE@12          | Must contain lowercase letter.               |
            | Ankit Jamwal | Male   | User@112 | Use112          | Passwords must match                         |



    Scenario Outline: Doctor signup with invalid name and email
        Given User is on the "doctor signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User enters the "<mobileNum>" in mobile number input field
        And User enters users "<email Id>" in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the  "<Error Message>" message

        Examples:
            | fullname | gender |  email Id          | password | confirmPassword | Error Message                        |
            | Ankit.1  | Male   |  User123@gmail.com | User@123 | User@123        | Please enter a valid name!           |
            | Ankit+1  | Male   |  User123@gmail.com | User@123 | User@123        | Please enter a valid name!           |
            | Ankit    | Male   |  Use.com           | User@123 | User@123        | Please enter a valid e-mail address! |
            | Ankit    | Male   |  Use12@            | User@123 | User@123        | Please enter a valid e-mail address! |


    Scenario Outline: Doctor signup with invalid mobile number 
        Given User is on the "doctor signup" page
        When User enters "<fullname>" in name input field
        And User selects the "<gender>" gender
        And User enters the "<mobileNumber>" in mobile input field
        And User enters users "<email Id>" in email input field
        And User enters the "<password>" in create password input field
        And User re-enters the "<confirmPassword>" in confirm password input field
        Then User can view the message "<message>" 

        Examples:
            | fullname | email Id             | password | confirmPassword| mobileNumber |message                                     |
            |  Ankit   | Test123@gmail.com    | User@123 | User@123       | 9863567      |Please enter a valid 10-digit mobile number |
            |  Ankit   | Testuser21@gmail.com | User@123 | User@123       | 975@1231     |Please enter a valid 10-digit mobile number |


