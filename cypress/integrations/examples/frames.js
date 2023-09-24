/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
 
describe('Frames', function() 
{
 
it('Frames testcase',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

 
})
 
 
})
 