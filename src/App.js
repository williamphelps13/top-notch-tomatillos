import React, { Component } from 'react';
import './App.css';
import movieData from './movieData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} />
      </main>
    );
  }
} 

export default App;
