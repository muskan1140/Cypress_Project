const element = '[href="/auth/login"]'
const element1= '#emailOrMobile'
const element2= '#password'
const element3='.jss21 > .MuiButtonBase-root > .MuiButton-label'


class LoginPage {

  getElement(){
    return cy.get(element)
  }

  getElement1(){
    return cy.get(element1)
  }

  getElement2(){
    return cy.get(element2)
  }

  getElement3(){
    return cy.get(element3)
  }


  

}

export const loginPage = new LoginPage();
