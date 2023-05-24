import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { registerpage } from "@pages/DoctorSignupPage";

When ('User clicks on "Doctor Sign up"', ()=> {
    registerpage.getLoginin()
});

Then ('doctor signup window occur',() => {
    registerpage.getSignin()
});

// When ('User selects the {string} gender' , (string) =>{
//     if(string == 'gender'){
//         registerpage.getGender()
//     }
//     else {
//         registerpage.getMobileNum()
//     }
// })

// When('User enters the "Email" in Email input field', () => {
//     registerpage.getEmail()
// });
