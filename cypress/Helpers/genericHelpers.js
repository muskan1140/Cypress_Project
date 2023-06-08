//Random email address generator
class Helpers {


    //Random Mobile Number Generator
    randomNumber(length) {

        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

    }


    //Click Function
    click(element) {
        element.click().then(function () {
            cy.log("element got clicked");

        },
            function (err) {
                cy.log("element couldn't get clicked");
            });
    }

    //Select Function
    select(element,type){
    element.select(type).then(function () {
            cy.log("element is selected");

        },
            function (err) {
                cy.log("element is not selected");
            });
}

    //Visible Function
    shouldBeVisible(element) {
        (element).should('be.visible').then(function () {
            cy.log("element should be visible");

        },
            function (err) {
                cy.log("element shouldn't be visible");
            });
    }


    //Type Function
    type(element, value) {
        element.type(value).then(function () {
            cy.log("typing field values should be valid");

        },
            function (err) {
                cy.log("typing field values shouldn't be valid");
            });
    }




    //Random Email Generator
    getEmail() {
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



    getdecoderData(string){
        return base64.decode(cred[string]);
    }


    getText(element) {
        
        return cy.get(element).invoke('text').then((text)=>{
            cy.wrap(text).as('SpecialityCard');
                    cy.log("The text of element is captured");
                    
        
        },    
            function (err) {
            cy.log("--->Error: The text of the element couldn't be captured");
        });
    }
}
export default Helpers;
