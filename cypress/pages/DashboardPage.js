const serviceField = 'div .MuiInputBase-input:eq(0)'
const doctorField = 'div .MuiInputBase-input:eq(1)'
const Logo = 'button[type=submit]'
const specialistCard = 'div .MuiGrid-container .MuiPaper-root:eq(4)'
const doctor = 'div .MuiCardContent-root:eq(1)'
const Specialities = '#specialities div a:eq(8)'
const doctorsCard = 'div #doctors div:contains("180")'
const doctorProfile = 'div .MuiCardContent-root:eq(2)'
const Card = 'div .MuiGrid-container .MuiPaper-root:eq(5)'
const specialitieCard = 'div .MuiGrid-container .MuiPaper-root:eq(5)'
const pageNavigate = 'div .MuiPagination-root'
const pageType = 'div .MuiButtonBase-root:eq(19)'

class DashboardPage{

    getSearchField(){
        return cy.get(serviceField)
    }

    getLogo(){
        return cy.get(Logo)
    }

    getSpecialistCard(){
        return cy.get(specialistCard)
    }

    getDoctor(){
        return cy.get(doctor)
    }

    getDoctorField(){
        return cy.get(doctorField)
    }
    
    getSpecialities(){
        return cy.get(Specialities)
    }

    getDoctorsCard(){
        return cy.get(doctorsCard)
    }

    getDoctorProfile(){
        return cy.get(doctorProfile)
    }

    getCard(){
        return cy.get(Card)
    }

    getSpecialitieCard(){
        return cy.get(specialitieCard)
    }

    getPageNavigate(){
        return cy.get(pageNavigate)
    }

    getPageType(){
        return cy.get(pageType)
    }
}

export default DashboardPage;