describe('new animal', () => {
  it('should allow a user to sign in', () => {
    cy.visit('/signin');
    cy.get('#email').type('test@g.com').should('have.value', 'test@g.com');
    cy.get('#password').type('123456').should('have.value', '123456');
    cy.get('#email-submit').click();
  });
  it('adds a new animal and renders the show page for that animal', () => {
    cy.visit('/search');
    cy.get('#Addnew').click();
    cy.get('#new-animal-name')
      .type('test name')
      .should('have.value', 'test name');
    cy.get('#new-animal-age').type('4').should('have.value', '4');
    cy.get('#new-animal-breed')
      .type('cy test breed')
      .should('have.value', 'cy test breed');
    cy.get('#new-animal-submit').click();
    cy.url().should('include', '/animal/');
  });
});
