/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('Open browser and print calendar for India', function () {
  //to caught an exception
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  let location = 'https://www.timeanddate.com/calendar/'
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })
  beforeEach(() => {
    cy.session('cookies', () => {
      cy.setCookie('test', 'my-cookie')
    })
    cy.visit(location)
  })



  //testcase 1 : Enter year and country and click on show to view calendar
  it('Display calender', function () {
    cy.get('#sf_year').clear().type(this.data.year1)
    cy.get('select').then($country => {
      var length = $country.find('option').length
      console.log(length)
      for (let i = 0; i < 4; i++) {
        console.log($country.val(i))
        cy.get("input[type='submit']").click()
      }
    })
  })
  //testcase 2: validate the number of months
  it('Validate the number of months in calendar', function () {

    cy.get('#sf_year').clear().type('2020')
    cy.get('select').then($country => { $country = $country.val('35') })
    cy.get("input[type='submit']").click()
    cy.get('div h1').should('have.length', '1')
    cy.get('th a').should('have.length', '12')
    console.log('Calendar display 12 months ')
  }
  )

  //Testcase 3: add print functionality.
  it('print', function () {
    it('can stub print', function () {
      cy.visit('/inner.html', {
        onBeforeLoad: (win) => {
          cy.stub(win, 'print')
        }
      })
    
      cy.window().then((win) => {
        win.print()
    
        expect(win.print).to.be.calledOnce
      })
    })
    
//cy.get('#printlink3 img').click()
//cy.get('#print').click()  // app calls window.print
  //.should(() => expect(printCalled).to.eq(true))
  })

})







/*cy.get('select').find('option:selected').should('have.text','India')
 
cy.get("input[type='submit']").click()
cy.get('div h1').should('have.length','1')
cy.get('th a').should('have.length','12')

 
//cy.get('.action-button').click()*/



















