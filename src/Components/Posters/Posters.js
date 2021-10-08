import React from 'react'
import './Posters.css'
import { Link } from 'react-router-dom'

const Posters = ({ pageOfMovies, size }) => {
  const moviePosters = pageOfMovies.map(poster => {
    return (
      <Link
        to={`/movie/${poster.id}`}
        key={poster.id}  
      >
        <img
          src={poster.posterPath}
          className={`${size}-poster-icon`}
          alt={`${poster.title} Movie Poster and Button`}
          id={poster.id}
        />
      </Link>
    )
  })

  return (
    <section>
      {moviePosters}
    </section>
  )
}

export default Posters