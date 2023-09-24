/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("#alertbtn").click()
cy.get("#confirmbtn").click()

cy.on('window:alert',(str) => {
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
}
 
)
 
 
 
 
 
}  )
 
 
 
}  )