describe('Rancid Tomatillos Movie Page', () => {

  // localhost url

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('input[alt="Mulan"]')
    .click()
  });

  // test singleMovie api?

  // dummy test to make sure things are hooked up correctly

//   it('Should confirm that true is equal to true', () => {
//     expect(true).to.equal(true)
//   });
// });

  it('Should confirm that user can visit page & view heading', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  });

  it('Should display movie info', () => {
    cy.get('h2').should('contain', 'Mulan')
    cy.get('p').should('contain', '★ 5.3')    
    cy.get('p').should('contain', 'When the Emperor of China')   
    cy.get('p').should('contain', 'Drama')   
    cy.get('p').should('contain', 'Adventure')      
    cy.get('p').should('contain', '115')   
    cy.get('p').should('contain', '$200,000,000')   
    cy.get('p').should('contain', '09/04/2020')   
    cy.get('p').should('contain', '$57,000,000')   
  });

})