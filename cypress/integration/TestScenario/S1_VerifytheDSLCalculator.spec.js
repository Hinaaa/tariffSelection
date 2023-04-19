const data=require('../../testData/data1.json');
const prodSelection= require("../../pagefactory/traficFeatures");
const traficSupportPage = require('../../pageobject/traficSupportPage');
const assertionPage= require("../../pagefactory/assertions");
 const sel = new traficSupportPage() 
 const assertionObj = new assertionPage()
 
let i=0;
require('cypress-xpath')

describe('Testcase to Verify the DSL calculator', function ()  {
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
//Navogates too Privathaftpflicht
prodSelection.enterPersonalDetailsinPrivathaftpflicht(data.myAge, data.situationGroupText)
//Enter and compare private Information
prodSelection.enterandComparePrivateInformation(data.birthDate, data.zipCode)
//Validate atleast 5 Tariffs appears
assertionObj.validateAtleastFiveTariffsAppears()
//validate first available tariffs for my selection
assertionObj.validateAvailableTariffsforMySelection()
}
