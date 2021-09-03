describe('Posters Page', () => {

  beforeEach(() => {
    cy.loadPostersPage()
  })

  it('Should be able to visit the page and render the page heading', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
  });

  it('Should be able to render the posters', () => {
    cy.get('img[class="poster-icon"]')
      .should('be.visible')
  });

  it('Should be able to render the correct posters', () => {
    cy.get('img[class="poster-icon"]')
      .should('have.attr', 'src')
      .should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });

  it('Should confirm that all posters display', () => {
    cy.get('img[class="poster-icon"]')
      .its('length')
      .should('eq', 4)
  });

  it('Should be able to render the movie posters loading image', () => {
    cy.get('img[class="loader-icon"]')
      .should('be.visible')
  });

  it('Should be able to render the movie posters specific loading message', () => {
    cy.get('div[class="loader-container"]')
      .contains('The movie posters are loading.')
  });

  it('Should not render movie details page', () => {
    cy.get('button[class="back-button"]')
      .should('not.exist')
    cy.get('h2[class="movie-title"]')
      .should('not.exist')
  });

  it('Should be able to click heading with no change in page', () => {
    cy.get('h1')
      .click()
    cy.get('img[class="poster-icon"]')
      .should('be.visible')
    cy.get('button[class="back-button"]')
      .should('not.exist')
    cy.get('h2[class="movie-title"]')
      .should('not.exist')
  });

  it('Should be able to click background with no change in page', () => {
    cy.get('section[class="posters-container"]')
      .click()
    cy.get('img[class="poster-icon"]')
      .should('be.visible')
    cy.get('button[class="back-button"]')
      .should('not.exist')
    cy.get('h2[class="movie-title"]')
      .should('not.exist')
  });
  
  it('Should be able to click a movie poster & be directed to the corresponding movie page', () => {
    cy.get('img[alt="Donald Duck"]')
      .click()
      .get('h2')
      .should('contain', 'Donald Duck')
  });
});