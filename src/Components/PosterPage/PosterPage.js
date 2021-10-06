import React, {useState, useEffect} from 'react'
import './PosterPage.css'
import PageButtons from '../PageButtons/PageButtons'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Posters from '../Posters/Posters'
import { getPosterData, getSearchResults } from '../../utilities/apiCalls'
import { Link } from 'react-router-dom'

const PosterPage = ({ page }) => {
  const [selection, setSelection] = useState('getThisMonthPop')
  const [genre, setGenre] = useState('all')
  const [search, setSearch] = useState('')
  const [movies1, setMovies1] = useState([])
  const [movies2, setMovies2] = useState([])
  const [error, setError] = useState('')

  const pageOfMovies = movies1.concat(movies2)

  const handleChange = (event) => {
    if (event.target.name === 'selection') {
      setSelection(event.target.value)
    } else if (event.target.name === 'selectGenre') {
      setGenre(event.target.value)
    } else if (event.target.name === 'search') {
      setSearch(event.target.value)
    }
  }
  
  useEffect(() => {
    if (selection === 'getThisMonthPop') {
      getPosterData('oneMonthAgo', page*2-1, 'popularity.desc', genre)
        .then(data => setMovies1(data))
        .then(data => {
          getPosterData('oneMonthAgo', page*2, 'popularity.desc', genre) 
            .then(data => setMovies2(data))
        })
        .catch(error => setError(error.message))
    } else if (selection === 'getThisYearPop') {
      getPosterData('oneYearAgo', page*2-1, 'popularity.desc', genre)
        .then(data => setMovies1(data))
        .then(data => {
          getPosterData('oneYearAgo', page*2, 'popularity.desc', genre) 
            .then(data => setMovies2(data))
        })
        .catch(error => setError(error.message))
    } else if (selection === 'getThisYearTop') {
      getPosterData('oneYearAgo', page*2-1, 'revenue.desc', genre)
        .then(data => setMovies1(data))
        .then(data => {
          getPosterData('oneYearAgo', page*2, 'revenue.desc', genre) 
            .then(data => setMovies2(data))
        })
        .catch(error => setError(error.message))
    }
  }, [selection, page, genre])

  const searchMovies = () => {
    getSearchResults(page*2-1, search)
      .then(data => setMovies1(data))
      .then(data => {
        getSearchResults(page*2, search)
          .then(data => setMovies2(data))
      })
      .catch(error => setError(error.message))
  }


  return (
    error ? <Error message={error} page='movies' /> 
    : !movies2.length ? <Loader item='movie posters are' />
    : 
    <>
      <section>
        <h3>I want to see...</h3>
        <input type='radio' name='selection' value='getThisMonthPop' onChange={handleChange} ></input>
        <label>New Movies this Month by Most Popular</label><br />
        <input type='radio' name='selection' value='getThisYearPop' onChange={handleChange} ></input>
        <label>New Movies this Year by Most Popular</label><br />
        <input type='radio' name='selection' value='getThisYearTop' onChange={handleChange} ></input>
        <label>New Movies this Year by Top Revenue</label>
      </section>
      <section>
        <label>
          By genre:
          <select name='selectGenre' value={genre} onChange={handleChange}>
           <option value='all'>All</option>
           <option value='28'>Action</option> 
           <option value='35'>Comedy</option>
           <option value='18'>Drama</option>
           <option value='878'>Science Fiction</option>
           <option value='53'>Thriller</option>
          </select>
        </label>
      </section>
      <section>
        <input type='text' name='search' value={search} placeholder='Search movies...' onChange={handleChange}></input>
        <button onClick={searchMovies}>Search Movies</button>
      </section>
      <PageButtons />
      <Posters pageOfMovies={pageOfMovies} size={'standard'} />
    </>
  )
}

export default PosterPage