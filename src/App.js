import React, { Component } from 'react';
import './App.css';
import movieData from './movieData'
import Posters from './Posters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  clickPoster = () => {
    document.querySelector('.posters-container').classList.add('hidden');

    console.log('test for clickposter')
  }

  render() {
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} clickPoster={this.clickPoster}/>
      </main>
    );
  }
} 

export default App;
