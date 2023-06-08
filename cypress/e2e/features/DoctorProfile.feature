Feature: Specialities Page

       Scenario Outline: Checking the functionality of specialities tab
       Given User is on the "home" page
       When User clicks on the specialities tab
       Then User should navigate to the specialities card page
       When User clicks on "<specialitie>" card
       Then corresponding doctors should be visible to the user

       Examples:
           | specialitie                      |
           | Breast & Oncoplastic - Oncology  |


    # //----------------------------------------------------------------------------

    Scenario: Checking the functionality of doctor card
    Given User is on the "home" page
    When User clicks on doctor card
    Then corresponding doctor details should be visible to the user

    # //----------------------------------------------------------------------------

    Scenario Outline: Checking the functionality of appointment slots
    Given User is on the "home" page
    When User clicks on doctor card
    Then User should navigate to the doctor specification page
    When User selects a particular date
    Then Corresponding available slots should be display to the user
    When User clicks on the slots
    Then User can view the "<message>"

    Examples:
        | message                                           |
        | Please Sign in / Register to book an appointment. |


    # //-----------------------------------------------------------------------------

    Scenario: Checking the functionality of doctor specialities
    Given User is on the "home" page
    When User clicks on doctor card
    Then User should navigate to the doctor specification page
    When User clicks on specialities
    Then Doctor specialities should be display to the user


    # //-------------------------------------------------------------------------------

    Scenario: Checking the functionality of doctor qualification
    Given User is on the "home" page
    When User clicks on doctor card
    Then User should navigate to the doctor specification page
    When User clicks on qualification
    Then Doctor qualification should be display to the user

    # //---------------------------------------------------------------------------------

    Scenario: Checking the functionality of doctor review
    Given User is on the "home" page
    When User clicks on doctor card
    Then User should navigate to the doctor specification page
    When User clicks on write a review
    Then Rating and write a review field should be display
    When User selects Rating
    And User writes review in review input field
    When User clicks on the submit button
    Then doctor profile page will be loaded back

    # //------------------------------------------------------------------------------------

    Scenario Outline: Checking the functionality of signIn to book an appointment
    Given User is on the "home" page
    When User clicks on doctor card
    Then User should navigate to the doctor specification page
    When User selects a particular date
    Then Corresponding available slots should be display to the user
    When User clicks on the slots
    Then User has to sign in to book an appointment
    When User clicks on sign in link
    Then User should navigate to the sign up page
    When User enters "<email>" in email input field
    And User enters "<password>" in password input field
    And User clicks on submit button
    Then User should navigates to the homepage

        Examples:
            | email | password |
            | email | password |






