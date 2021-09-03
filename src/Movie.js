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
    
    let {backdrop_path, title, average_rating, genres, tagline, overview, runtime, budget, release_date, revenue} = singleMovie;

    return (
      <div>

        {!Object.keys(singleMovie).length ? <Loader item='movie information is'/> :

        <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
          <section className='movie-card'>
            <h2 className='movie-title'>{title}</h2>
            <p className='movie-rating'>★ {average_rating.toFixed(1)}</p>
            <p className='movie-tagline'>{tagline}</p>
            <p className='movie-overview'>{overview}</p>
            <p className='bottom-element'>{dayjs(release_date).format('YYYY')}</p>
            <p className='movie-runtime'>{runtime ? runtime : ''} Minutes</p>
            <div className='genre-container'>
              {genres.map(genre => <p className='movie-genres'>{genre}</p>)}
            </div>
          </section>
          <Link to='/'>
            <button className='back-button'>BACK</button>
          </Link>
        </section>
        }
      </div>
    )
  }
}

export default Movie;
