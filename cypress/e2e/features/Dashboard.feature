Feature: Dashboard Page

  Scenario Outline: Checking the functionality of the service search input field
    Given User is on the "home" page
    When  User enters the '<service>' in service input field
    When User clicks on the search logo
    Then Doctors matching the search should be display

    Examples:
      | service     |
      | Cosmetology |

# //----------------------------------------------------------------------

  Scenario: Checking the functionality of the doctor search input field
    Given User is on the "home" page
    When User enters the doctor name in doctor input field
    When User clicks on the search logo
    Then Doctor matching the search should be display

# //-----------------------------------------------------------------------


  Scenario Outline: Checking the visibility of UI element
    Given User is on the "home" page
    And corresponding page appears with expected "<element>"
    Examples:
      | element                       |
      | 20+ Specialities,200+ Doctors |


# //------------------------------------------------------------------------

  Scenario Outline: Checking the functionality of view all specialities link
    Given User is on the "home" page
    When User clicks on view all specialities
    Then corresponding page appears with the expected "<Item>"

    Examples:
      | Item        |
      | Cosmetology |


# //-------------------------------------------------------------------------

Scenario: Checking the functionality of doctors card
  Given User is on the "home" page
  When User clicks on any one doctor card
  Then User should navigates to the doctor profile page

# //--------------------------------------------------------------------------


Scenario Outline: Check the functionality of Specialities Card
  Given User is on the "home" page
  When User clicks on the "<Speciality Card>"
  Then corresponding page appears with the expected section "<Item>"

  Examples:
    | Speciality Card        | Item                   |
    | Fifth Speciality Card  | Fifth Speciality Card  |


# //---------------------------------------------------------------------------

Scenario Outline: Verification of Page-Navigation
  Given User is on the "home" page
  When User clicks on pagination button
  Then User is on '<Value>' pagination page

  Examples:
    | Value |
    |  3    |





