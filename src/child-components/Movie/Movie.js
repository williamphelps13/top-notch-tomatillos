import React, { Component } from 'react';
import './Movie.css';
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import { getData } from '../../utilities/apiCalls';
import { cleanMovieData } from '../../utilities/dataCleaning';
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
          <section className='movie-container'>
            <section className='movie-card'>
              <h2 className='title'>{title}</h2>
              <p className='rating'>{average_rating}</p>
              <p className='tagline'>{tagline}</p>
              <p className='overview'>{overview}</p>
              <p className='release'>{release_date}</p>
              <p className='runtime'>{runtime}</p>
              <div className='genre-container'>
                {genres.map(genre => <p className='genres'>{genre}</p>)}
              </div>
            </section>
            <Link to='/'>
              <button className='back-btn'>BACK</button>
            </Link> 
          </section>
        </section>
      )
    }
  }
}

export default Movie;
