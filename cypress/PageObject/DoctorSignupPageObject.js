import DoctorPage from "@pages/DoctorSignupPage";
import Helpers from "cypress/Helpers/genericHelpers";

const doctorPage= new DoctorPage();
const helpers = new Helpers();

class DoctorPageObject{
       
    getName(name){
        helpers.type(doctorPage.getName(),name)
    }

    getGender(gender){
        helpers.click(doctorPage.getGender())
    }

    getMobileNum(){
        let mobileNum = helpers.randomNumber(10);
        helpers.type(doctorPage.getMobileNum(),mobileNum)
    
    }

    getEmail(){
        let email = helpers.getEmail(); 
        helpers.type(doctorPage.getEmail(),email)
    }

    getEmailId(emailid){
        helpers.type(doctorPage.getEmail(),emailid)
      }

    etPassword(password){
        helpers.type(doctorPage.getPassword(),password)
    }

    getConfirmPassword(confirmPassword){
        helpers.type(doctorPage.getConfirmPassword(),confirmPassword)
    }

    getRegister(register){
        helpers.click(doctorPage.getRegister(),register)
    }

    getErrorMessage(){
        helpers.shouldBeVisible(doctorPage.getErrorMessage())
    }

    getErrorNumber(errorNumber){
        helpers.type(doctorPage.getMobileNum(),errorNumber)
    }

}

export default DoctorPageObject;
