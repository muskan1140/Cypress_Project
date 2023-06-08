import {
    Given,
    When,
    Then,
 } from "@badeball/cypress-cucumber-preprocessor";

import AppointmentPageObject from "cypress/PageObject/AppointmentPageObject";  
const appointmentpage = new AppointmentPageObject;

Then('Corresponding page appears with the expected {string}',()=>{


});

Then('User should see the "cancel button"',(cancelButton)=>{
   appointmentpage.cancelButton(cancelButton)
});

When('User clicks on the "appointment" filter field',(appointmentField)=>{
    appointmentpage.appointmentField(appointmentField)
});

When('User clicks on {string}',(appointmentDropdown)=>{
    appointmentpage.appointmentDropdown(appointmentDropdown)
});

Then('User can view list of "all appointments"',()=>{
     
});

When('User clicks on {string} pagination page',(Page)=>{
    appointmentpage.getPage(Page)
});

Then('Corresponding page appears with that {string} page',(Value)=>{
    appointmentpage.getValue(Value)
})