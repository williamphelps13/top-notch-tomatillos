import React from 'react';
import './Movie.css';

const Movie = ({ movie, clickBackBtn }) => {

  return (
    <section className='movie-background'>
      <section className='movie-card'>
        <h2>{movie.title}</h2>
        <p>★ {movie.average_rating}</p>
        <p>{movie.tagline}</p>
        <p>{movie.overview}</p>
        <p>{movie.genres}</p>
        <p>{movie.runtime}</p>
        <p>{movie.budget}</p>
        <p>{movie.release_date}</p>
        <p>{movie.revenue}</p>
        <button
          className='back-button'
          onClick={() => clickBackBtn()}
        >BACK</button>
      </section>
    </section>
  )
}

export default Movie;
