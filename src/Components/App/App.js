import React, {useState, useEffect} from 'react'
import './App.css'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Posters from '../Posters/Posters'
import Movie from '../Movie/Movie'
import { getPosterData } from '../../utilities/apiCalls'
import { Route } from 'react-router-dom'

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    getPosterData()
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
  }, [])
  
  
  return (
    <main className="App">
      <h1 className="App-header">Rancid Tomatillos</h1>
      
      <Route exact path='/' 
        render={() =>
          error ? <Error message={error} page='movies' /> 

          : !movies.length ? <Loader item='movie posters are' />

          : <Posters posters={movies} />
        }
      />

      <Route 
        exact path='/:id' 
        render={({ match }) => <Movie movieID={parseInt(match.params.id)} />}
      />

    </main>
  )
}

export default App