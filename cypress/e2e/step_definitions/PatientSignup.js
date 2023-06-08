import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";

import PatientPageObject from "cypress/PageObject/PatientSignupPageObject";
const PatientPage = new PatientPageObject();

When('User selects {string} {string} {string} in the dob select field',(date,month,year)=>{
    PatientPage.getDate(date)
    PatientPage.getMonth(month)
    PatientPage.getYear(year)

});

Then('User can view message {string}',()=>{

});

Then('User can view the  {string} message',(errorMessage)=>{
    PatientPage.getErrorMessage(errorMessage)
});

Then('User enters the {string} in mobile input field',(errorNumber)=>{
    PatientPage.getErrorNumber(errorNumber)
});

