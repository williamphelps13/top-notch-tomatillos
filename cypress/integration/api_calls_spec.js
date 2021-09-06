describe('API Calls Error Messages', () => {
  
  it('Should be able to display 500 error on posters page', () => {
    cy.goToPoster500Page();
    cy.get('p[class="error-message"]')
      .contains('500 error')
  })

  it('Should be able to display 500 error on movie page', () => {
    cy.goToMovie500Page();
    cy.get('p[class="error-message"]')
      .contains('500 error')
  })

 