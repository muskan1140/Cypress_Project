import loginPage from "@pages/LoginPage";
import Helpers from "cypress/Helpers/genericHelpers";

const login = new loginPage();
const helpers = new Helpers();

class loginPageObject{
      getLoginButton(){
         helpers.click(login.getLoginButton());
      }

      getEmailField(email){
       cy.fixture('example').then((testdata)=>{
          helpers.type(login.getEmailField(),(atob(testdata[email])))
       })

      }

      getPasswordField(password){
        cy.fixture('example').then((testdata)=>{
          helpers.type(login.getPasswordField(),(atob(testdata[password])))
       })
      }

      getSubmitButton(){
        helpers.click(login.getSubmitButton());
      }

      getErrorMessage(){
        helpers.shouldBeVisible(login.getErrorMessage());
      }
      
}

export default loginPageObject;