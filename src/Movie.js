import React, { Component } from 'react';
import './Movie.css';
import Error from './Error'
import Loader from './Loader'
import { getData } from './apiCalls';
import { cleanMovieData } from './data-cleaning';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMovie: {},
      error: ''
    }
  }

  componentDidMount() {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieID}`)
    .then(data => cleanMovieData(data))
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    const {singleMovie, error} = this.state;
  
    let {backdrop_path, title, average_rating, tagline, overview, release_date, runtime, genres} = singleMovie;
    if (error) {

      return < Error message={error} /> 

    } else if (!Object.keys(singleMovie).length) {

      return <Loader item='movie information is'/>

    } else {
      return (
        <section className='movie-background' style={{ backgroundImage: `url(${backdrop_path})` }}>
          <section className='movie-card'>
            <h2 className='movie-title'>{title}</h2>
            <p className='movie-rating'>{average_rating}</p>
            <p className='movie-tagline'>{tagline}</p>
            <p className='movie-overview'>{overview}</p>
            <p className='movie-release'>{release_date}</p>
            <p className='movie-runtime'>{runtime}</p>
            <div className='genre-container'>
              {genres.map(genre => <p className='movie-genres'>{genre}</p>)}
            </div>
          </section>
          <Link to='/'>
            <button className='back-button'>BACK</button>
          </Link>
        </section>
      )
    }
  }
}

export default Movie;
