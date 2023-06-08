Feature: Doctor Appointment


#     Scenario Outline: Checking the functionality of UI element
#         Given User logs in with "<Role>" credentials
#         When User clicks on the "<Page>" type
#         Then Corresponding page appears with the expected "<Item>"

#         Examples:
#             | Role   | Page             | Item                   |
#             | Doctor | Appointment Page | My Appointments,Cancel |



# # //----------------------------------------------------------------

#     Scenario Outline: Checking the functionality of cancel button
#         Given User logs in with "<Role>" credentials
#         When User clicks on the "<Page>" type
#         Then User should see the "cancel button"
#         # And User clicks on the "<Confirmation button>"
#         # Then Corresponding page appears with the expected "<Item>"

#         Examples:
#             | Role   | Page             |
#             | Doctor | Appointment Page |


# # //----------------------------------------------------------------------

#     Scenario Outline: Checking the functionality of appointment filter
#     Given User logs in with "<Role>" credentials
#     When User clicks on the "<Page>" type
#     When User clicks on the "appointment" filter field
#     And User clicks on "<Number>"
#     Then User can view list of "all appointments"

#     Examples:
#         | Role   | Page             | Number               |
#         | Doctor | Appointment Page | appointmentDropdown  |


# //-----------------------------------------------------------------------

    Scenario Outline: Checking the functionality of side navigation button
        Given User logs in with "<Role>" credentials
        When User clicks on the "<Page>" type
        When User clicks on "<Page>" pagination page
        Then Corresponding page appears with that "<Value>" page

        Examples:
            | Role   | PageType         | Page | Value |
            | Doctor | Appointment page | 1    | 1     |