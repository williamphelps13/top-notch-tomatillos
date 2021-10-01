import { cleanPosterData, cleanMovieData } from './dataCleaning'

export const getPosterData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => checkForError(response))
    .then(data => cleanPosterData(data))
}

export const getMovieData = (movieID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
    .then(response => checkForError(response))
    .then(data => cleanMovieData(data))
}

const checkForError = (response) => {
  if (response.ok) {
    return response.json()
  } else if (response.status === 404) {
    throw Error('404 error ("We looked but did not find anything in that spot") - Head back, and try again.')
  } else if (response.status === 500) {
    throw Error('500 error ("It\'s not you; it\'s me") -  Please try again soon.')
  } else {
  throw Error('Other error - Something miscellaneous went wrong.')
  }
}