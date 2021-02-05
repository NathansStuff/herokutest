describe("new animal", () => {
    it("adds a new animal and renders the show page for that animal", () => {
      cy.visit("/search")
      cy.get('#Addnew').click()
      cy.get('#new-animal-name').type('test name').should('have.value', 'test name')
      cy.get('#new-animal-age').type('4').should('have.value', '4')
      cy.get('#new-animal-breed').type('cy test breed').should('have.value', 'cy test breed')
      cy.get('#new-animal-submit').click()
      cy.url().should('include', '/animal/')
    })
    it ('should allow a animal update to be posted to that animal', () => {
      cy.url().should('include', '/animal/')
      cy.get('#update-number').type('500').should('have.value', '500')
      cy.get('#update-notes').type('update note').should('have.value', 'update note')
      cy.get('#update-submit').click()
    })
})
  
