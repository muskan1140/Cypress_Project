import DoctorProfilePage from "@pages/DoctorProfilePage";
import Helpers from "cypress/Helpers/genericHelpers";

const doctorPage = new DoctorProfilePage;
const helpers =  new Helpers();


class DoctorPageObject{
    getSpecialities(){
        helpers.click(doctorPage.getSpecialities())
    }

    getSpecialitieCard(){
        helpers.click(doctorPage.getSpecialitieCard())
    }

    getDoctor(){
        helpers.shouldBeVisible(doctorPage.getDoctor())
    }

    getDoctorCard(){
        helpers.click(doctorPage.getDoctorCard())
    }

    getDate(){
        helpers.click(doctorPage.getDate())
    }
        
    getSlot(){
        helpers.click(doctorPage.getSlot())
    }

    getMessage(){
        helpers.shouldBeVisible(doctorPage.getMessage())
    }

    getDoctorSpecialitie(){
        helpers.click(doctorPage.getDoctorSpecialitie())
    }

    getDoctorQualification(){
        helpers.click(doctorPage.getDoctorQualification())
    }

    getReview(){
        helpers.click(doctorPage.getReview())
    }

    getReviewSpace(){
        helpers.shouldBeVisible(doctorPage.getReviewSpace())
    }

    getRating(){
        helpers.click(doctorPage.getRating())
    }

    getReviewField(){
        helpers.type(doctorPage.getReviewField(),'The Staff and Doctor were all very friendly and helpful.')
    }

    getSubmitButton(){
        helpers.click(doctorPage.getSubmitButton())
    }

    getLink(){
        helpers.click(doctorPage.getLink())
    }

    getAppointment(){  
        helpers.click(doctorPage.getAppointment())
    }
}
export default DoctorPageObject;