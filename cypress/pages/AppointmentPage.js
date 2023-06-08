const Appointment = "div .MuiListItemText-root > .MuiTypography-root:eq(2)"
const cancelButton = 'div .MuiButtonBase-root:eq(5)'
const appointmentField = 'div #per-page-options'
const appointmentDropdown = "[data-value='5']"
const Page = 'div .MuiButtonBase-root:eq(10)'
const Value = 'div .MuiButtonBase-root:eq(10)'

class AppointmentPage {
    clickAppointment() {
        return cy.get(Appointment)
    }
    getCancelButton(){
        return cy.get(cancelButton)
    }
    getAppointmentField(){
        return cy.get(appointmentField)
    }
    getAppointmentDropdown(){
        return cy.get(appointmentDropdown)
    }
    getPage(){
        return cy.get(Page)
    }
    getValue(){
        return cy.get(Value)
    }
}
export default AppointmentPage;