import React, { Component } from 'react';
import './App.css';
import Error from './Error/Error';
import Loader from './Loader/Loader';
import Posters from './Posters/Posters';
import Movie from './Movie/Movie';
import { getData } from './utilities/apiCalls';
import { cleanPosterData } from './utilities/data-cleaning';
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
    getData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(data => cleanPosterData(data))
    .then(data => this.setState({movies: data}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    const {movies, error} = this.state;
   
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        
        <Route exact path='/' 
          render={() => {
        
          if (error) {

            return < Error message={error} /> 

          } else if (!movies.length) {

            return <Loader item='movie posters are' />

          } else {

            return <Posters posters={movies}/>
          } 
        }}
      />

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