import AppointmentPage from "@pages/AppointmentPage";
import Helpers from "cypress/Helpers/genericHelpers";


const appointment = new AppointmentPage;
const helpers = new Helpers();

class AppointmentPageObject{
    visit(){
       cy.Login()
    }
    clickAppointment(){
        helpers.click(appointment.clickAppointment())
    }
    cancelButton(){
        helpers.shouldBeVisible(appointment.getCancelButton())
    }
    appointmentField(){
        helpers.click(appointment.getAppointmentField())
    }
    appointmentDropdown(){
        helpers.click(appointment.getAppointmentDropdown())
    }
    getPage(){
        helpers.click(appointment.getPage())
    }
    getValue(){
        helpers.click(appointment.getValue())
    }
}

export default AppointmentPageObject;