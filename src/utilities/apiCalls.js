import { cleanPosterData, cleanMovieData, cleanVideoData } from './dataCleaning'
import dayjs from 'dayjs'

const now = dayjs().format('YYYY-MM-DD')
const oneMonthAgo = dayjs().subtract(1, 'month').format('YYYY-MM-DD')

export const getPosterData = (pageNum) => {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=61beee5760e383289f2184ab4e7ff153&with_original_language=en&sort_by=popularity.desc&include_adult=false&page=${pageNum}&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${now}&with_watch_monetization_types=flatrate`)
    .then(response => checkForError(response))
    .then(data => {
      console.log('discovery', data) 
      return cleanPosterData(data)
    })
}

export const getMovieData = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => {
      console.log('movie', data) 
      return cleanMovieData(data)
    })
}

export const getVideo = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => cleanVideoData(data))
}

export const getSimilar = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=61beee5760e383289f2184ab4e7ff153`)
    .then(response => checkForError(response))
    .then(data => {
      console.log('similar', data) 
    })
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