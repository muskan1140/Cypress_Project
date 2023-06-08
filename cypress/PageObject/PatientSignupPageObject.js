import PatientPage from "@pages/PatientSignupPage";
import Helpers from "cypress/Helpers/genericHelpers";

const registerPage= new PatientPage();
const helpers = new Helpers();

class PatientPageObject {

    getName(fullname){
        helpers.type(registerPage.getName(),fullname)
    }

    getGender(){
        helpers.click(registerPage.getGender())
    }

    getDate(date){
        helpers.select(registerPage.getDate(),date)
    }

    getMonth(month){
        helpers.select(registerPage.getMonth(),month)
    }
    
    getYear(year){
        helpers.select(registerPage.getYear(),year)

    }

    getMobileNum(){
        let mobileNum = helpers.randomNumber(10);
        helpers.type(registerPage.getMobileNum(),mobileNum)
    
    }

    getEmail(){
        let email = helpers.getEmail(); 
        helpers.type(registerPage.getEmail(),email)
        
    }

    getEmailId(emailid){
      helpers.type(registerPage.getEmail(),emailid)
    }

    getPassword(password){
        helpers.type(registerPage.getPassword(),password)
    }

    getConfirmPassword(confirmPassword){
        helpers.type(registerPage.getConfirmPassword(),confirmPassword)
    }

    getRegister(register){
        helpers.click(registerPage.getRegister(),register)
    }

    getErrorMessage(errorMessage){
        helpers.shouldBeVisible(registerPage.getErrorMessage(),errorMessage)
    }

    getErrorNumber(errorNumber){
        helpers.type(registerPage.getMobileNum(),errorNumber)
    }

}

export default PatientPageObject;