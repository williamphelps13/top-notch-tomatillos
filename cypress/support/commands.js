Cypress.Commands.add('interceptAPI', (urlEnding, statusCode, fixturePage) => {
  cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${urlEnding}`, {
    statusCode: statusCode,
    fixture: `${fixturePage}_test_data.json`,
    delay: 1000
  })
})

Cypress.Commands.add('clickPoster', () => {
  cy.visit('http://localhost:3000')
    .get('img[alt="Donald Duck Movie Poster and Button"]')
    .click()
})

Cypress.Commands.add('loadPostersPage', () => {
  cy.interceptAPI('', 201, 'posters')
    .interceptAPI('/337401', 201, 'movie')
    .visit('http://localhost:3000')
});

Cypress.Commands.add('goToMoviePage', () => {
  cy.interceptAPI('', 201, 'posters')
    .interceptAPI('/337401', 201, 'movie')
    .clickPoster()
});

Cypress.Commands.add('goToPosterErrorPage', (error) => {
  cy.interceptAPI('', error, 'posters')
    .visit('http://localhost:3000')
});

Cypress.Commands.add('goToPoster500Page', () => {
  cy.goToPosterErrorPage(500)
});

Cypress.Commands.add('goToMovie500Page', (error) => {
  cy.goToMovieErrorPage(500)
});

Cypress.Commands.add('goToMovieErrorPage', (error) => {
  cy.interceptAPI('', 201,'posters')
    .interceptAPI('/337401', error, 'movie')
    .clickPoster()
});

Cypress.Commands.add('goToPoster404Page', () => {
  cy.goToPosterErrorPage(404)
});

Cypress.Commands.add('goToMovie404Page', () => {
  cy.goToMovieErrorPage(404)
});