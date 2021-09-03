describe('Single Movie Details Page', () => {

  beforeEach(() => {
    cy.goToMoviePage();
  })

  it('Should be able to visit the movie detail page and render the page heading', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
  });

  it('Should be able to render movie details', () => {
    cy.get('section[class="movie-background"]')
      .should('have.attr', 'style')
      .should('include', 'https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg')
    cy.get('h2[class="movie-title"]')
      .contains('Donald Duck')
    cy.get('p[class="movie-rating"]')
      .contains('★ 5.3')
    cy.get('p[class="movie-overview"]')
      .contains('When the Emperor of China')
    cy.get('p[class="movie-release"]')
      .contains('2020')
    cy.get('p[class="movie-runtime"]')
      .contains('115 Minutes')
    cy.get('p[class="movie-genres"]')
      .contains('Action')
    cy.get('p[class="movie-genres"]')
      .contains('Adventure')
  });
 
  it('Should be able to render all movie genres', () => {
    cy.get('p[class="movie-genres"]')
      .contains('Action')
    cy.get('p[class="movie-genres"]')
      .contains('Adventure')
    cy.get('p[class="movie-genres"]')
      .contains('Drama')
    cy.get('p[class="movie-genres"]')
      .contains('Fantasy')
  });

  it('Should display back button', () => {
    cy.get('button[class="back-button"]')
      .should('be.visible')
  });

  it('Should be able to render the movie details page loading image', () => {
    cy.get('img[class="loader-icon"]')
      .should('be.visible')
  });

  it('Should be able to render the movie details page specific loading message', () => {
    cy.get('div[class="loader-container"]')
      .contains('The movie information is loading.')
  });

  it('Should not render movie posters page', () => {
    cy.get('img[class="poster-icon"]')
      .should('not.exist')
  });

  it('Should be able to click heading with no change in page', () => {
    cy.get('h1')
      .click()
    cy.get('button[class="back-button"]')
      .should('be.visible')
    cy.get('img[class="poster-icon"]')
      .should('not.exist')
  });

  it('Should be able to click background with no change in page', () => {
    cy.get('section[class="movie-background"]')
      .click()
    cy.get('button[class="back-button"]')
      .should('be.visible')
    cy.get('img[class="poster-icon"]')
      .should('not.exist')
  });

  it('Should direct user back to poster page', () => {
    cy.get('button[class="back-button"]')
      .click()
    cy.get('img[class="poster-icon"]')
      .its('length')
      .should('eq', 4)
  });
})