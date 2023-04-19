const data=require('../../testData/data2.json');
const prodSelection= require("../../pagefactory/traficFeatures");
const traficSupportPage = require('../../pageobject/traficSupportPage');
const assertionPage= require("../../pagefactory/assertions");
 const sel = new traficSupportPage() 
 const assertionObj = new assertionPage()
 
let i=0;
require('cypress-xpath')

describe('Testcase to load multiple tariff result pages', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL) //visit URL
          assertionObj.validateHomePage()
        })
      });
   Object.keys(data)
       .forEach(function(tc,i){
           const testData=data[i];
           it(testData.tc,function() {
               execute(testData)
           })
       })
})

function execute(data) {
prodSelection.enterPersonalDetailsinPrivathaftpflicht(data.myAge, data.situationGroupText,data.totalTariffCount) 
prodSelection.enterandComparePrivateInformation(data.birthDate, data.zipCode)

//pagination count
prodSelection.validatePagination(data.totalTariffCount)

//Button no longer displayed when all the tariffs are visible
assertionObj.validateLoadButtonNotAppearOnLastPage()

//validate total count label and Validate total number of tariffs displayed matches the total listed number of tariffs
assertionObj.validateTotalTraficCount(data.totalTariffCount)
}
