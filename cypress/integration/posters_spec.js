
describe('Rancid Tomatillos Posters Page', () => {

  // localhost url

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // dummy test to make sure things are hooked up correctly

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});