import {
    Given,
    When,
    Then,
 } from "@badeball/cypress-cucumber-preprocessor";

import DashboardPageObject from "cypress/PageObject/DashboardPageObject";  
const dashboardpage = new DashboardPageObject;


Then('User enters the {string} in service input field',(service)=>{
    dashboardpage.getSearchField(service)
})

When('User clicks on the search logo',(Logo)=>{
    dashboardpage.getLogo(Logo)
})

Then('Doctors matching the search should be display',(doctor)=>{
    dashboardpage.getDoctor(doctor)
    
});

When('User enters the doctor name in doctor input field',(doctorField)=>{
    dashboardpage. getDoctorField(doctorField)
})

Then('Doctor matching the search should be display',()=>{

})

Given('corresponding page appears with expected {string}',(element)=>{
    let name = element.toString();
    let doctorName = name.split(",")

    for(let count=0;count<doctorName.length;count++){
        cy.xpath(`//* [text()="${doctorName[count]}"] `);
    }
})

When('User clicks on view all specialities',(Specialities)=>{
    dashboardpage.getSpecialities(Specialities)
})

Then('corresponding page appears with the expected {string}',(Item)=>{
    dashboardpage.getSpecialistCard(Item)
})

Then('User should verify that the doctors card is visible or not',(doctorsCard)=>{
    dashboardpage.getDoctorCard(doctorsCard)
});

When('User clicks on any one doctor card',(doctorProfile)=>{
    dashboardpage.getDoctorProfile(doctorProfile)
});

Then('User should navigates to the doctor profile page',()=>{

});

When('User clicks on the {string}',(Card)=>{
   dashboardpage.getCard(Card)
});

Then('corresponding page appears with the expected section {string}',(specialitieCard)=>{
   dashboardpage.getSpecialitieCard(specialitieCard)
})

When('User clicks on pagination button',(pageNavigate)=>{
    dashboardpage.getPageNavigate(pageNavigate)
});

Then('User is on {string} pagination page',(Value)=>{
    dashboardpage.getPageType(Value)
})