import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'



Given("I am on the homepage", () => {
  cy.visit("/");
});

When("User should see the {string}", (element) => {
  loginPage.getElement().click()
  
});

Then("User enters {string} email in email input field", (element1) => {
  loginPage. getElement1().type('test123@gmail.com')
});

Then("User enters {string} password in password input field", (element2) =>{
  loginPage.getElement2().type("admin")
});

Then("User clicks on {string} login button", (element3) =>{
  loginPage.getElement3().should('be.visible').click()
});

// When("A user provides incorrect credentials, and clicks on the login button", (table) => {
//   table.hashes().forEach((row) => {
//     cy.log(row.username);
//     cy.log(row.password);
//     loginPage.submitLogin(row.username, row.password)

//   });
// });
// Then("the url will contains the inventory subdirectory", () => {
//   cy.url().should("contains", "/inventory.html");
// });
// Then("The error message {string} is displayed", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
// });


