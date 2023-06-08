const nameField = 'div #full_name'
const genderType = 'div .MuiButtonBase-root:eq(5)'
const date = 'div #dropdown-day select'
const month = 'div #dropdown-month select'
const year = 'div #dropdown-year  select'
const mobileNum= 'div #mobile_number'
const email='div #email_address'
const password = 'div #password'
const confirmPassword ='div #confirm_password'
const register = 'div .MuiButtonBase-root:last'
const errorMessage = 'div p'
const errorNumber = 'div #mobile_number'



class PatientPage {
    getName(){
        return cy.get(nameField)
    }

    getGender(){
        return cy.get(genderType)
    }

    getDate(){
        return cy.get(date)
    }

    getMonth(){
        return cy.get(month)
    }

    getYear(){
        return cy.get(year)
    }

    getMobileNum(){
        return cy.get(mobileNum)
    }

    getEmail(){
        return cy.get(email)
    }

    getPassword(){
        return cy.get(password)
    }

    getConfirmPassword(){
        return cy.get(confirmPassword)
    }

    getRegister(){
        return cy.get(register)
    }

    getErrorMessage(){
        return cy.get(errorMessage)
    }

    getErrorNumber(){
        return cy.get(errorNumber)
    }
    

}
export default PatientPage;