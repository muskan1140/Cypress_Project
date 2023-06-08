import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import DoctorPageObject from "cypress/PageObject/DoctorSignupPageObject";
const doctorPage = new DoctorPageObject();

// Then('User can view the  {string} message',(errorEmail)=>{
//     doctorPage.getErrorMessage(errorEmail)
// });

// Then('User enters the {string} in mobile input field',(errorNumber)=>{
//     doctorPage.getErrorNumber(errorNumber)
// });

