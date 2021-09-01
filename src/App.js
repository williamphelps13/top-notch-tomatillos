import React, { Component } from 'react';
import './App.css';
import Posters from './Posters'
import Movie from './Movie'
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

        {error && <h2>The server doesn't seem to be working right now</h2>} 
        
        {!movies.length && !error && <p>Hang Tight!</p>}

        <Route exact path='/' render={() => <Posters posters={movies} clickPoster={this.clickPoster} /> } />
        <Route 
          exact path='/:id' 
          render={({ match }) => {
            const clickedMovieID = parseInt(match.params.id);
          return <Movie movieID={clickedMovieID}/> 
          }}
        />
      </main>
    );
  }
} 

export default App;