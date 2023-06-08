const nameField = 'div #full_name'
const gender ='div .MuiButtonBase-root:eq(5)'
const mobileNum= 'div #mobile_number'
const email='div #email_address'
const password = 'div #password'
const confirmPassword ='div #confirm_password'
const register = 'div .MuiButtonBase-root:last'
const errorEmail = 'div #email_address'
const errorNumber = 'div #mobile_number'


class DoctorPage{
    
    getName(){
        return cy.get(nameField)
    }

    getGender(){
        return cy.get(gender)
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
        return cy.get(errorEmail)
    }

    getErrorNumber(){
        return cy.get(errorNumber)
    }
    

}

export default DoctorPage;