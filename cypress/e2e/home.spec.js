describe("home", () => {
    it("renders search page", () => {
      cy.visit("/search")
      cy.get('#Addnew').click()
      cy.get('#new-animal-name').type('test name').should('have.value', 'test name')
      cy.get('#new-animal-age').type('4').should('have.value', '4')
      cy.get('#new-animal-breed').type('cy test breed').should('have.value', 'cy test breed')
      cy.get('#new-animal-submit').click()
    })
  })
  

  /*

  describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://www.flexi-desks.com/login')
        cy.get('#email').type('test@email').should('have.value', 'test@email')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.MuiButtonBase-root').click({multiple: true })
    })
})

  */