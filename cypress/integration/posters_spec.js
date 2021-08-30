
describe('Rancid Tomatillos Posters Page', () => {

  // localhost url

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // dummy test to make sure things are hooked up correctly

  // it('Should confirm that true is equal to true', () => {
  //   expect(true).to.equal(true)
  // });

  it('Should confirm that user can visit localhost:3000', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  });

  it('Should confirm that posters display', () => {
    cy.get('input[type="image"]') 
    .should('be.visible')
  });

  it('Should confirm that the correct posters display', () => {
    cy.get('input')
    .should('have.attr', 'src')
    .should('include','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

  it('Should confirm that all posters display', () => {
    cy.get('input[type="image"]') 
  });

});