import React, {useState, useEffect} from 'react'
import './Movie.css'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import { getMovieData } from '../../utilities/apiCalls'
import { Link } from 'react-router-dom'

const Movie = ({ movieID }) => {
  const [singleMovie, setSingleMovie] = useState({})
  const [error, setError] = useState('')

  const {backdrop_path, title, average_rating, tagline, overview, release_date, runtime, genres} = singleMovie

  useEffect(() => {
    getMovieData(movieID)
    .then(data => setSingleMovie(data))
    .catch(error => setError(error.message))
  })

  conditionalPostersDisplay = () => {
    const {singleMovie, error} = this.state

    return error ? <Error message={error} page='movie information' /> 
      : !Object.keys(singleMovie).length ? <Loader item='movie information is' /> 
      : this.displayMovieCard()
  }

  return (
    error ? <Error message={error} page='movie information' /> 

    : !Object.keys(singleMovie).length ? <Loader item='movie information is' /> 

    :
      <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
        <section className='movie-container'>
          <section className='movie-card'>
            <h2 className='title'>{title}</h2>
            <p className='rating'>{average_rating}</p>
            <p className='tagline'>{tagline}</p>
            <p className='overview'>{overview}</p>
            <p className='release'>{release_date}</p>
            <p className='runtime'>{runtime}</p>
            <div className='genre-container'>
              {genres.map(genre => <p className='genres' key={genre}>{genre}</p>)}
            </div>
          </section>
          <Link to='/'>
            <button className='back-btn'>BACK</button>
          </Link> 
        </section>
      </section>
  )
}

export default Movie
