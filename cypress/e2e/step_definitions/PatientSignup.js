import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { registerpage } from "@pages/PatientSignupPage";

Given ("User is on Doctor landing page",() => {
    registerpage.visit()
});

When ('User clicks on "Patient Sign up"', ()=> {
    registerpage.getLoginin()
});

Then ('patient signup window occur',() => {
    registerpage.getSignin()
});

When ('User enters "Fullname" in name input field',() => {
    registerpage.getFullname()
});

When ('User selects the {string} gender' , (string) =>{
    if(string == 'gender'){
        registerpage.getGender()
    }
    else if(string == 'DOB')
    {
        registerpage.getDOB()
    }else{
        registerpage.getMobileNum()
    }
})

When ('User enters the "date of birth" in DOB input field',() =>{
    registerpage.getDOB()
});

When('User enters the "Mobile Number" in Mobile number input field',() => {
    registerpage.getMobileNum()
});

When('User enters the "Email" in Email input field', () => {
    registerpage.getEmail()
});

When('User creates "Password" in create password input field',() => {
    registerpage.getPassword()
});

When ('User re enters the "Password" in confirm password input field',() => {
    registerpage.getConfirmPassword()
});

Then('User Enters the "register" register button', () => {
    registerpage.getbutton()
});

    

