//To start cypress type: npx cypress open 

describe('We browse our prototype', function () {
  it('Visits the wanders throught the site', function () {
    cy.visit('http://localhost:3000')
    cy.get('.testProgrammes')
      .click({ force: true })
    
    cy.url().should('contain', '/programmes')
    cy.get('.testClick')
      .click({ force: true })
    cy.url().should('contain', '/programme')
      .get('h1').should('contain', 'Homeland')
  })
})