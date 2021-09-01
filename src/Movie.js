import React, { Component } from 'react';
import './Movie.css';
import dayjs from 'dayjs';
import {fetchSingleMovie} from './apiCalls';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMovie: {},
      error: ''
    }
  }

  let {id, title, backdrop_path, average_rating, tagline, overview, genres, runtime, budget, release_date, revenue} = movie;

  return (
    <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
      <section className='movie-card'>
        <h2>{title}</h2>
        <p>★ {average_rating.toFixed(1)}</p>
        <p>{tagline}</p>
        <p>{overview}</p>
        <p>{genres.join(' | ')}</p>
        {!runtime ? runtime = '' :
          <p>{runtime}</p>
        }
        {!budget ? budget = '' : 
          <p>${budget.toLocaleString()}</p>
        }
        <p>{dayjs(release_date).format('MM/DD/YYYY')}</p>
        {!revenue ? revenue = '' :
          <p>${revenue.toLocaleString()}</p>
        }
        <Link 
          to='/'
        >
          <button
            className='back-button'
            onClick={() => clickBackBtn()}
          >BACK</button>
        </Link>
      </section>
    </section>
  )
}

export default Movie;
