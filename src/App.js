import React, { Component } from 'react';
import './App.css';
import movieData from './movieData'
import Posters from './Posters'
import Movie from './Movie'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: movieData.singleMovie,
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return this.setState({movies: data.movies})
      })
      .catch(error => this.setState({error: error}))
  }

  clickPoster = () => {
    document.querySelector('.posters-container').classList.add('hidden');
  }

  clickBackBtn = () => {
    document.querySelector('.posters-container').classList.remove('hidden');
  }

  render() {
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} clickPoster={this.clickPoster}/>
        <Movie movie={this.state.singleMovie} clickBackBtn={this.clickBackBtn}/>
      </main>
    );
  }
} 

export default App;
