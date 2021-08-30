import React, { Component } from 'react';
import './App.css';
import Posters from './Posters'
import Movie from './Movie'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      error: ''
    }
  }
  
  componentDidMount() {
    fetchMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: error}))
  }
  
  clickPoster = (id) => {   
    fetchSingleMovie(id)
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(error => this.setState({error: error}))
    document.querySelector('.posters-container').classList.add('hidden');
  }

  clickBackBtn = () => {
    document.querySelector('.posters-container').classList.remove('hidden');
  }

  render() {
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} clickPoster={this.clickPoster} />
        <Movie movie={this.state.singleMovie} clickBackBtn={this.clickBackBtn} />
      </main>
    );
  }
} 

export default App;
