Cypress.Commands.add('loadPostersPage', () => {
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      fixture: 'posters_test_data.json'
    }).intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 201,
      fixture: 'movie_test_data.json'
    }).visit('http://localhost:3000')
  });

  Cypress.Commands.add('goToMoviePage', () => {
    cy.loadPostersPage()
      .get('img[alt="Donald Duck"]')
      .click()
    });