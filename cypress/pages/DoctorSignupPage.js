import helpers from "cypress/Helpers/functions"
const Helpers = new helpers();

class RegisterPage{

    getLoginin(){
        Helpers.visible('.MuiButton-label:eq(0)')
        Helpers.click('.MuiButton-label:eq(0)')
    }

    getSignin(){
        Helpers.visible('.MuiTab-wrapper:eq(2)')
        Helpers.click('.MuiTab-wrapper:eq(2)')
    }

    getGender(){
        Helpers.click('.MuiTypography-root:eq(3)')
    }

    getMobileNum(){
        cy.get('#mobile_number').type(Helpers.getRandom(10))
    }
}

export const registerpage= new RegisterPage();