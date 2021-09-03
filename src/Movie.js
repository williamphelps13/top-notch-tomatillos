import React, { Component } from 'react';
import './Movie.css';
import dayjs from 'dayjs';
import {fetchSingleMovie} from './apiCalls';
import { Link } from 'react-router-dom';
import Loader from './Loader'

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMovie: {},
      error: ''
    }
  }

  componentDidMount() {
    fetchSingleMovie(this.props.movieID)
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    const {singleMovie, error} = this.state;
    
    let {backdrop_path, title, average_rating, tagline, overview, genres, runtime, budget, release_date, revenue} = singleMovie;

    return (
      <div>

        {!Object.keys(singleMovie).length ? <Loader item='movie information is'/> :

        <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
          <section className='movie-card'>
            <h2 className='movie-title'>{title}</h2>
            <p>★ {average_rating.toFixed(1)}</p>
            <p className='tagline'>{tagline}</p>
            <p>{overview}</p>
            <p>{genres.join(' | ')}</p>
            <p>{runtime ? runtime : ''} Minutes</p>
            <p>{dayjs(release_date).format('YYYY')}</p>
            <Link 
              to='/'
            >
              <button
                className='back-button'
              >BACK</button>
            </Link>
          </section>
        </section>
        }
      </div>
    )
  }
}

export default Movie;
