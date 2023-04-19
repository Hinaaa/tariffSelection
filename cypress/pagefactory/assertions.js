
    const traficSupportPage = require("../pageobject/traficSupportPage");
    const sel = new traficSupportPage()
    
    
class  assertions{

    validateHomePage(){
        cy.contains('Stromvergleich').should('exist')
 
 }
 validatePrivathaftpflichtExists() {
    //Privathaftpflicht personal information page shoould appear
    cy.contains('Privathaftpflicht').should('exist')
    cy.contains('Persönliche Angaben').should('exist')
 }

 validateProcessingMessage() {
    cy.contains('Ihre Ergebnisse werden ermittelt.').should('exist')
 }
 validateAtleastFiveTariffsAppears() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('be.gte', 5)
} 
validateTwentyTariffsAppears() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('equal', 20)
}
validateTariffsGreaterThanOne() {
    cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('be.gte', 1)
}    
 validateAvailableTariffsforMySelection() {   
    cy.get('[class="product"]').eq(0).within(() => {
    cy.contains('PREIS-LEISTUNGSSIEGER').should('exist')
    cy.get('[class="product-group product-group-logo"]').should('exist')
    cy.contains('Getsafe Digital GmbH Comfort').should('exist')
    cy.get('[class="comparison"]').should('exist')
    cy.get('[name="productIndex"]').should('exist')
    cy.contains('Tarif vergleichen').should('exist')
    cy.contains('Deckungssumme: 20 Mio. € ').should('exist')
    cy.contains('Personenschäden: 15 Mio. € ').should('exist')
    cy.contains('Schlüsselverlust Miete: 10.000 € ').should('exist')
    cy.contains('Selbstbeteiligung: 0 €').should('exist')
    cy.contains('Mindestvertragslaufzeit: 1 Jahr').should('exist')
    cy.contains('Tarifdetails').should('exist')
    cy.contains('Zum Online-Antrag').should('exist')  
  })
 }
 validateTotalTraficCount(totalTariffCount) {
   cy.get('[class="results-container"]').within(() => {
      cy.contains(totalTariffCount+' Tarif').should('exist')
   })

  //Validate total number of tariffs displayed matches the total listed number of tariffs above result
  cy.get('[class="product-list comparison-footer-is-open"]').find('product').its('length').should('eq', parseInt(totalTariffCount))
  //both are equal to totalTariffrafficCount
}  
validateLoadButtonNotAppearOnLastPage() {
   cy.wait(1000)
   cy.log('Button Not Found. Pagination Ended')
   cy.get('[class="button load-more-button"]').should('not.exist')
}  
validateTariffResultListPageAppear() {   
    cy.get('[class="product"]').eq(0).within(() => {
    cy.contains('PREIS-LEISTUNGSSIEGER').should('exist')
    cy.get('[class="product-group product-group-logo"]').should('exist')
    cy.contains('Getsafe Digital GmbH Comfort').should('exist')
  })
 }
 validateTariffPriceOfTheFirstTariff(price) {   
   var a = '29,16'
   cy.get('[class="product"]').eq(0).within(() => {
      cy.contains(a).should('exist');
    
      cy.get('[class="price"]').invoke('text').then((text) => {
         const textvalue = text
         expect(textvalue).contains(price)
     });
})
 }
 ValidateTariffDetailsSections1() {   
    //Validate “Wich­tigs­te Leis­tun­gen", “Allgemein“, „ Tätigkeiten und Hobbys“ 
    cy.get('[class="detail-container"]').eq(0).within(() => {   
    cy.get('[class="navigation"]').invoke('text').then((text) => {
      const textvalue = text
      expect(textvalue).contains('Wich­tigs­te Leis­tun­gen')     
 })
 cy.get('[class="navigation"]').invoke('text').then((text) => {
   const textvalue = text
   expect(textvalue).contains('All­ge­mein')     
})
cy.get('[class="navigation"]').invoke('text').then((text) => {
   const textvalue = text
   expect(textvalue).contains('Tä­tig­kei­ten und Hob­bys')     
})
})
} 
 ValidateTariffDetailsSections2() {   
    // “Miete & Immobilien” and “Dokumente”
    cy.get('[class="detail-container"]').eq(0).within(() => {    
      cy.get('[class="navigation"]').invoke('text').then((text) => {
         const textvalue = text
         expect(textvalue).contains('Miete & Im­mo­bi­li­en')     
      })
      cy.get('[class="navigation"]').invoke('text').then((text) => {
         const textvalue = text
         expect(textvalue).contains('Do­kumen­te')     
      })
 })
 } 
 //ZUM ONLINE-ANTRAG button appear
 ValidateZUMONLINENTRAGButtonAppear() {
   cy.get('[class="product"]').eq(0).within(() => {
      cy.contains('Zum Online-Antrag').should('exist')
    })
 } 
}
module.exports = assertions;