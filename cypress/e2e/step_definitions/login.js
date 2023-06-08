import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import loginPageObject from "cypress/PageObject/LoginPageObject";

const Login = new loginPageObject();

When("User clicks on login button", () => {
  Login.getLoginButton()
  
});

When('User clicks on submit button',()=>{
  Login.getSubmitButton()
}); 

Then('User should navigates to the homepage',()=>{
  cy.url().should('include', '/my-doctors')
});

Then('User should see the {string} messsage',()=>{
  Login.getErrorMessage()
});