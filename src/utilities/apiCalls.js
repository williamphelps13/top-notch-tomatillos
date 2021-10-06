import { cleanPosterData, cleanMovieData, cleanVideoData, cleanImageData } from './dataCleaning'
import dayjs from 'dayjs'

export const getPosterData = (start, pageNum, sortBy, genre) => {
  const now = dayjs().format('YYYY-MM-DD')

  if (start === 'oneMonthAgo') {
    start = dayjs().subtract(1, 'month').format('YYYY-MM-DD')
  } else if (start === 'oneYearAgo') { 
    start = dayjs().subtract(1, 'year').format('YYYY-MM-DD')
  }

  if (genre === 'all') {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=61beee5760e383289f2184ab4e7ff153&with_original_language=en&include_adult=false&with_watch_monetization_types=flatrate&primary_release_date.gte=${start}&primary_release_date.lte=${now}&page=${pageNum}&sort_by=${sortBy}`)
    .then(response => checkForError(response))
    .then(data => cleanPosterData(data))
  } else {
    const genreNum = parseInt(genre)

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=61beee5760e383289f2184ab4e7ff153&with_original_language=en&include_adult=false&with_watch_monetization_types=flatrate&primary_release_date.gte=${start}&primary_release_date.lte=${now}&page=${pageNum}&sort_by=${sortBy}&with_genres=${genreNum}`)
      .then(response => checkForError(response))
      .then(data => cleanPosterData(data))
  }
}

// &primary_release_year=2021
export const getSearchResults = (pageNum, search) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=61beee5760e383289f2184ab4e7ff153&include_adult=false&page=${pageNum}&query=${search}`)
    .then(response => checkForError(response))
    .then(data => cleanPosterData(data))
}

export const getMovieData = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => cleanMovieData(data))
}

export const getVideo = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => cleanVideoData(data))
}

export const getSimilar = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => cleanPosterData(data))
    .then(data => data.sort((a, b) => b.popularity - a.popularity))
}

export const getImages = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/images?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => cleanImageData(data))
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