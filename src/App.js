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
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
} 

export default App;
