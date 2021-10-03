import React, {useState, useEffect} from 'react'
import './App.css'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Posters from '../Posters/Posters'
import Movie from '../Movie/Movie'
import { getPosterData } from '../../utilities/apiCalls'
import { Route } from 'react-router-dom'

const App = () => {
  const [movies1, setMovies1] = useState([])
  const [movies2, setMovies2] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    loadPage(1)
  }, [])
  
  const loadPage = (page) => {
    getPosterData(page*2-1)
      .then(data => setMovies1(data))
      .then(data => {
        getPosterData(page*2) 
          .then(data => setMovies2(data))
      })
      .catch(error => setError(error.message))
      .then()
  }

  return (
    <main className="App">
      <h1 className="App-header">Top-Notch Tomatillos</h1>
      
      <Route exact path='/' 
        render={() =>
          error ? <Error message={error} page='movies' /> 

          : !movies2.length ? <Loader item='movie posters are' />

          : <Posters loadPage={loadPage} posters={movies1.concat(movies2)} />
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