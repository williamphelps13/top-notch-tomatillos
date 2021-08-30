import React from 'react';
import './Movie.css';

const Movie = ({ movie, clickBackBtn }) => {

  let {id, title, backdrop_path, average_rating, tagline, overview, genres, runtime, budget, release_date, revenue} = movie;

  return (
    <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
      <section className='movie-card'>
        <h2>{title}</h2>
        <p>★ {average_rating}</p>
        <p>{tagline}</p>
        <p>{overview}</p>
        <p>{genres.join(' | ')}</p>
        {!runtime ? runtime = '' :
          <p>{runtime}</p>
        }
        {!budget ? budget = '' : 
          <p>${budget.toLocaleString()}</p>
        }
        <p>{release_date}</p>
        {!revenue ? revenue = '' :
          <p>${revenue.toLocaleString()}</p>
        }
        <button
          className='back-button'
          onClick={() => clickBackBtn()}
        >BACK</button>
      </section>
    </section>
  )
}

export default Movie;
