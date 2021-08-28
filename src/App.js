import React, { Component } from 'react';
import './App.css';
import movieData from './movieData-test';
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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {this.setState({movies: data.movies})})
      .catch(error => this.setState({error: error}))
  }
  
  clickPoster = (id) => {   
    const clickedMovie = this.state.movies.find(movie => id === movie.id)
    this.setState({singleMovie: clickedMovie});
    this.fetchMovie(id);
    
    document.querySelector('.posters-container').classList.add('hidden');
    
    document.querySelector('.movie-background').style.background = `url(${this.state.singleMovie.backdrop_path})`;
    document.querySelector('.movie-background').style.height = `100vh`;
  }

  fetchMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => {this.setState({singleMovie: data.movie})})
      .catch(error => this.setState({error: error}))
  }

  clickBackBtn = () => {
    document.querySelector('.posters-container').classList.remove('hidden');
    document.querySelector('.movie-background').style.background = `white`;
  }

  render() {
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} clickPoster={this.clickPoster}/>
        <Movie movie={this.state.singleMovie} clickBackBtn={this.clickBackBtn} />
      </main>
    );
  }
} 

export default App;
