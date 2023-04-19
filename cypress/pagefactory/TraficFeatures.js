

const { functionsIn } = require("lodash");
const traficSupportPage = require("../pageobject/traficSupportPage");
const assertionPage= require("./assertions");

const sel = new traficSupportPage()
const assertionObj = new assertionPage()

//Navigates to Versicherungen and select Privathaftpflicht
async function enterPersonalDetailsinPrivathaftpflicht(myAge, situationGroupText){
    sel.selectVersicherungen()
    sel.selectprivathaftpflicht()
  
    //Enter my age and select Single ohne Kinder
    sel.ageTextbox(myAge)//type text
    sel.selectSituationGroup(situationGroupText)//Single ohne Kinder
    sel.clickSubmit()

    //Privathaftpflicht personal information page shoould appear
    assertionObj.validatePrivathaftpflichtExists()
}

//Enter and Compare Private Information
async function enterandComparePrivateInformation(birthDate, zipCode) { 
    sel.selectDateofBirth(birthDate)
    sel.enterPostCode(zipCode)
    sel.clickJetztVergleichen()
          
//Validate processing message
assertionObj.validateProcessingMessage()
cy.wait(25000)
}

//Perform Pagination
async function validatePagination(totalTariffCount) { 
    var paginationCount = Math.trunc(totalTariffCount/20)
      cy.get('body').then($body => {
               var i = 0;
               if ($body.find('[class="button load-more-button"]').length > 0) {
                for(i = 0; i < paginationCount ; i++ ) {
                    if ($body.find('[class="button load-more-button"]') != null) {
                    sel.clicktoLoadMore() //click to load more
                }
            }
        }
    })
}
module.exports={enterPersonalDetailsinPrivathaftpflicht,enterandComparePrivateInformation,validatePagination};
