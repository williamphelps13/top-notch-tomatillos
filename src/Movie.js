import React, { Component } from 'react';
import './Movie.css';

const Movie = ({ movie }) => {

  return (
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
    </section>
  )
}

export default Movie;
