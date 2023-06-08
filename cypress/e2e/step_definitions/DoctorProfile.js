import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

import DoctorPageObject from "cypress/PageObject/DoctorPageObject";
const doctorPage = new DoctorPageObject;


When('User clicks on the specialities tab',(Specialities)=>{
    doctorPage.getSpecialities(Specialities)
});

Then('User should navigate to the specialities card page',()=>{

});

When('User clicks on {string} card',(specialitie)=>{
    doctorPage.getSpecialitieCard(specialitie)
});

Then('corresponding doctors should be visible to the user',()=>{
    doctorPage.getDoctor()
});

Then('corresponding doctor details should be visible to the user',()=>{
});

When('User selects a particular date',()=>{
    doctorPage.getDate()
});

Then('Corresponding available slots should be display to the user',()=>{
    
});

When('User clicks on the slots',(slot)=>{
    doctorPage.getSlot(slot)
});

Then('User can view the {string}',(Message)=>{
    doctorPage.getMessage(Message)
});

When('User clicks on specialities',(doctorSpecialitie)=>{
    doctorPage.getDoctorSpecialitie(doctorSpecialitie)
});

Then('Doctor specialities should be display to the user',()=>{
    
});

When('User clicks on qualification',(doctorQualification)=>{
    doctorPage.getDoctorQualification(doctorQualification)
});

Then('Doctor qualification should be display to the user',()=>{

});

When('User clicks on write a review',(Review)=>{
    doctorPage.getReview(Review)
});

Then('Rating and write a review field should be display',(reviewSpace)=>{
    doctorPage.getReviewSpace(reviewSpace)
});

When('User selects Rating',(Rating)=>{
    doctorPage.getRating(Rating)
});

When('User writes review in review input field',(reviewField)=>{
    doctorPage.getReviewField(reviewField)
});

When('User clicks on the submit button',(submitButton)=>{
    doctorPage.getSubmitButton(submitButton)
});

Then('doctor profile page will be loaded back',()=>{
});

Then('User has to sign in to book an appointment',()=>{
});

When('User clicks on sign in link',(Link)=>{
    doctorPage.getLink(Link)
});

Then('User should navigate to the sign up page',()=>{
    
});



