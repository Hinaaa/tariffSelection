const data=require('../../testData/data3.json');
const prodSelection= require("../../pagefactory/traficFeatures");
const traficSupportPage = require('../../pageobject/traficSupportPage');
const assertionPage= require("../../pagefactory/assertions");
 const sel = new traficSupportPage() 
 const assertionObj = new assertionPage()
 
let i=0;
require('cypress-xpath')

describe('Testcase to verify offer details for a selected tariff', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL) //visit URL
          //Home page  should appear
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

//validate Tariff Result List Page Appear
assertionObj.validateTariffResultListPageAppear()
//validate Tariff Price of The First Tariff
assertionObj.validateTariffPriceOfTheFirstTariff(data.price)

//open Tariff Details
sel.openTariffDetails()
//Validate tariff details sections: “Weitere Leistungen”, “Allgemein“, „ Tätigkeiten und Hobbys“
assertionObj.ValidateTariffDetailsSections1()
//Validate details sections: “Miete & Immobilien” and “Dokumente”
assertionObj.ValidateTariffDetailsSections2()
//Validate Zum Online-Antrag 
assertionObj.ValidateZUMONLINENTRAGButtonAppear()
}
