import React, { Component } from 'react';
import './App.css';
import Posters from './Posters'
import Movie from './Movie'
import Loader from './Loader'
import Error from './Error'
import { fetchMovies } from './apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }
  
  componentDidMount() {
    fetchMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    const {movies, error} = this.state;
    
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>

        {error && <Error />} 
        
        <Route exact path='/' render={() => !movies.length && !error ? <Loader item='movie posters are' /> : <Posters posters={movies} />}/>

        <Route 
          exact path='/:id' 
          render={({ match }) => {
            const clickedMovieID = parseInt(match.params.id);
            return <Movie movieID={clickedMovieID} /> 
          }}
        />
        
      </main>
    );
  }
} 

export default App;