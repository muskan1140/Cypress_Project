const Specialities='div .MuiLink-root .MuiButtonBase-root:eq(2)'
const specialitieCard = 'div .MuiPaper-root:eq(9)'
const doctor = 'div .MuiCardContent-root:eq(0)'
const doctorCard='div .MuiCardContent-root:eq(1)'
const Date = 'div #scrollable-auto-tab-1'
const slot = 'div .MuiButtonBase-root:eq(8)'
const Message = 'div .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 div:contains("Please")'
const doctorSpecialitie = 'div .MuiAccordionSummary-content .MuiTypography-root b:eq(0)'
const doctorQualification='div .MuiAccordionSummary-content .MuiTypography-root b:eq(1)'
const Review = 'div .MuiAccordionSummary-content .MuiTypography-root b:eq(5)'
const reviewSpace = 'div .MuiCollapse-wrapperInner .MuiAccordionDetails-root:eq(5)'
const Rating = 'div .MuiRating-root .MuiRating-label:eq(3)'
const reviewField = 'div [name="review"]'
const submitButton = 'div #button'
const Link = 'div [style="color: red;"] > [href="/auth/login"]'
const Appointment = 'div .MuiLink-root > .MuiButtonBase-root:eq(2)'

class DoctorProfilePage{
   getSpecialities(){
    return cy.get(Specialities)
   }

   getSpecialitieCard(){
    return cy.get(specialitieCard)
   }

   getDoctor(){
    return cy.get(doctor)
   }

   getDoctorCard(){
     return cy.get(doctorCard)
    }

    getDate(){
        return cy.get(Date)
    }

    getSlot(){
        return cy.get(slot)
    }

    getMessage(){
        return cy.get(Message)
    }

    getDoctorSpecialitie(){
        return cy.get(doctorSpecialitie)
    }

    getDoctorQualification(){
        return cy.get(doctorQualification)
    }

    getReview(){
        return cy.get(Review)
    }

    getReviewSpace(){
        return cy.get(reviewSpace)
    }

    getRating(){
        return cy.get(Rating)
    }

    getReviewField(){
        return cy.get(reviewField)
    }

    getSubmitButton(){
        return cy.get(submitButton)
    }

    getLink(){
        return cy.get(Link)
    }

    getAppointment(){
        return cy.get(Appointment)
    }
}
export default DoctorProfilePage;