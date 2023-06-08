import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import Urls from "../../../urls/Urls.json";
import PatientPageObject from "cypress/PageObject/PatientSignupPageObject";
import loginPageObject from "cypress/PageObject/LoginPageObject";
import DoctorPageObject from "cypress/PageObject/DoctorSignupPageObject";
import SpecialitiesPageObject from "cypress/PageObject/DoctorPageObject";
import AppointmentPageObject from "cypress/PageObject/AppointmentPageObject";

const Login = new loginPageObject();
const PatientPage = new PatientPageObject();
const doctorPage = new DoctorPageObject();
const specialitiesPage = new SpecialitiesPageObject();
const appointmentpage = new AppointmentPageObject();


Given('User is on the {string} page' ,(url)=>{
    cy.visit(Urls[url]);
});

When('User enters {string} in name input field',( fullname)=>{
    PatientPage.getName(fullname)
});

When('User selects the {string} gender',(gender)=>{
    PatientPage.getGender(gender)
});
When('User enters the {string} in mobile number input field',(mobileNum)=>{
    PatientPage.getMobileNum(mobileNum)
});

When('User enters the email in email input field',()=>{
    PatientPage.getEmail()
});
When('User enters the {string} in create password input field',(password)=>{
    PatientPage.getPassword(password)
});

When('User re-enters the {string} in confirm password input field',(confirmPassword)=>{
    PatientPage.getConfirmPassword(confirmPassword)
});
Then("User enters users {string} in email input field",(emailId)=>{
    PatientPage.getEmailId(emailId)
})
Then('User clicks on the {string} button',(register)=>{
    PatientPage.getRegister(register)
});

When("User enters {string} in email input field", (email) => {
  Login.getEmailField(email)
});

When("User enters {string} in password input field", (password) =>{
  Login.getPasswordField(password)
});

Then('User can view the message {string}',()=>{
    
});

When('User clicks on doctor card',(doctorCard)=>{
    specialitiesPage.getDoctorCard(doctorCard)
});

Then('User should navigate to the doctor specification page',()=>{
});

Given('User logs in with {string} credentials',(Role)=>{
    appointmentpage.visit(Role)
});

When('User clicks on the {string} type',(Page)=>{
    appointmentpage.clickAppointment(Page)
});


