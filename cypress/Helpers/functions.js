//Random email address generator
class Helpers{
     

    //Random Mobile Number Generator
    getRandom(length) {

        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
        
    }
    

    //Click Function
    click(element){
        cy.get(element).click().then(function(){
            cy.log("element got clicked");

        },
        function(err){
            cy.log("element couldn't get clicked");});
    }


    //Visible Function
    visible(element){
        cy.get(element).should('be.visible').then(function(){
            cy.log("element should be visible");

        },
        function(err){
            cy.log("element shouldn't be visible");});
    }


    //Type Function
    type(element,value){
        cy.get(element).type(value).then(function(){
            cy.log("typing field values should be valid");

        },
        function(err){
            cy.log("typing field values shouldn't be valid");});
    }




    //Random Email Generator
    getMail() {
    var candidates = "ABCDEFGHIJKLMNOPQRSTUVWXY123456789";
    var randomemail = "",
    rand;
    for (var i = 0; i < 1; i++) {
    for (var j = 0; j < 8; j++) {
    rand = Math.floor(Math.random() * candidates.length);
    randomemail += candidates.charAt(rand);
    }
    randomemail += "@gmail.com";
    }
    return randomemail;
    }

}

export default Helpers;
