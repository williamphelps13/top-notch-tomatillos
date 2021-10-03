import React, {useState, useEffect} from 'react'
import './Movie.css'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Video from '../Video/Video'
import { getMovieData, getVideo, getSimilar } from '../../utilities/apiCalls'
import { Link } from 'react-router-dom'

const Movie = ({ movieID }) => {
  const [singleMovie, setSingleMovie] = useState({})
  const [videoKey, setVideoKey] = useState('')
  const [similar, setSimilar] = useState('')
  const [error, setError] = useState('')
  
  const {backdropPath, title, rating, tagline, overview, releaseDate, runtime, genres} = singleMovie

  useEffect(() => {
    getMovieData(movieID)
      .then(data => setSingleMovie(data))
      .catch(error => setError(error.message))

    getVideo(movieID)
      .then(data => {
        console.log('video', data)
        setVideoKey(data)
      })
      .catch(error => setError(error.message))

    getSimilar(movieID)
      .then(data => setSimilar(data))
      .catch(error => setError(error.message)) 
  }, [])

  return (
    error ? <Error message={error} page='movie information' /> 

    : !Object.keys(singleMovie).length ? <Loader item='movie information is' /> 

    :
      <section className='movie-background' style={{ backgroundImage: `url(${backdropPath})` }}>
        <section className='movie-container'>
          <section className='movie-card'>
            <h2 className='title'>{title}</h2>
            <p className='rating'>{rating}</p>
            <p className='tagline'>{tagline}</p>
            <p className='overview'>{overview}</p>
            <p className='release'>{releaseDate}</p>
            <p className='runtime'>{runtime}</p>
            <div className='genre-container'>
              {genres.map(genre => <p className='genres' key={genre}>{genre}</p>)}
            </div>
          </section>
          <Link to='/'>
            <button className='back-btn'>BACK</button>
          </Link> 
        </section>
        <div>
          <Video id={videoKey} title={title} />
        </div>
      </section>
  )
}

export default Movie
