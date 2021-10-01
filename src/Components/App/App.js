import React, { Component } from 'react'
import './App.css'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Posters from '../Posters/Posters'
import Movie from '../Movie/Movie'
import { getPosterData } from '../../utilities/apiCalls'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }
  
  componentDidMount = () => {
    getPosterData()
    .then(data => this.setState({movies: data}))
    .catch(error => this.setState({error: error.message}))
  }

  conditionalPostersDisplay = () => {
    const {movies, error} = this.state

    return error ? <Error message={error} page='movies' /> 
      : !movies.length ? <Loader item='movie posters are' />
      : <Posters posters={movies} />
  } 


  parseID = (match) => {
    return parseInt(match.params.id)
  }

  render = () => {

    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        
        <Route exact path='/' 
          render={() => this.conditionalPostersDisplay()}
        />

        <Route 
          exact path='/:id' 
          render={({ match }) => <Movie movieID={this.parseID(match)} />}
        />
        
      </main>
    );
  }
} 

export default App