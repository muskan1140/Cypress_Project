import DashboardPage from "@pages/DashboardPage";
import Helpers from "cypress/Helpers/genericHelpers";


const dashboardPage = new DashboardPage;
const helpers = new Helpers();


class DashboardPageObject{
    getSearchField(){
        helpers.type(dashboardPage.getSearchField(),'Cosmetology')
        helpers.type(dashboardPage.getSearchField(),'{downarrow}')
        helpers.type(dashboardPage.getSearchField(),'{enter}')
    }

    getLogo(){
        helpers.click(dashboardPage.getLogo())
    }

    getSpecialistCard(){
        helpers.shouldBeVisible(dashboardPage.getSpecialistCard())
    }

    getDoctorField(){
        helpers.type(dashboardPage.getDoctorField(),'Victoria Greenholt')
    }

    getDoctor(){
        helpers.shouldBeVisible(dashboardPage.getDoctor())
    }

    getSpecialities(){
        helpers.click(dashboardPage.getSpecialities())
    }
    
    getDoctorCard(){
        helpers.shouldBeVisible(dashboardPage.getDoctorsCard())
    }

    getDoctorProfile(){
        helpers.click(dashboardPage.getDoctorProfile())
    }

    getCard(){
        helpers.getText(dashboardPage.getCard())
    }

    getSpecialitieCard(){
        helpers.click(dashboardPage.getSpecialitieCard())
    }

    getPageNavigate(){
        helpers.shouldBeVisible(dashboardPage.getPageNavigate())
    }

    getPageType(){
        helpers.click(dashboardPage.getPageType())
    }
}

export default DashboardPageObject;