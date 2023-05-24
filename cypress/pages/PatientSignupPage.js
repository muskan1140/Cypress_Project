import helpers from "cypress/Helpers/functions"
const Helpers = new helpers();
class RegisterPage{
    visit(){
        cy.visit("/auth/login")
    }

    getLoginin(){
        // cy.get('.MuiButton-label:eq(0)').should('be.visible')
        // cy.get('.MuiButton-label:eq(0)').click()
        Helpers.visible('.MuiButton-label:eq(0)')
        Helpers.click('.MuiButton-label:eq(0)')
    }

    getSignin(){
        // cy.get('.MuiTab-wrapper:eq(1)').should('be.visible')
        // cy.get('.MuiTab-wrapper:eq(1)').click()
        Helpers.visible('.MuiTab-wrapper:eq(1)')
        Helpers.click('.MuiTab-wrapper:eq(1)')
    }

    getFullname(){
        // cy.get('#full_name').type('Muskan')
        Helpers.type('#full_name' , 'Muskan')
    }

    getGender(){
        // cy.get('.MuiTypography-root:eq(3)').click()
        Helpers.click('.MuiTypography-root:eq(3)')
    }

    getDOB(){
        cy.get('#dropdown-day  select').select('4');
        cy.get('#dropdown-month  select').select('May');
        cy.get('#dropdown-year select').select('2000');
        
    }

    getMobileNum(){
        cy.get('#mobile_number').type(Helpers.getRandom(10))
    }

    getEmail(){
        // cy.get('#email_address').type(Helpers.getMail())
        Helpers.type('#email_address', Helpers.getMail())

    }

    getPassword(){
        // cy.get('#password').type('User@123')
        Helpers.type('#password', 'User@123' )
    }

    getConfirmPassword(){
        // cy.get('#confirm_password').type('User@123')
        Helpers.type('#confirm_password', 'User@123' )
    }

    getbutton(){
        // cy.get('.MuiButtonBase-root:eq(8)').click()
        Helpers.click('.MuiButtonBase-root:eq(8)')
    }
}


export const registerpage= new RegisterPage();