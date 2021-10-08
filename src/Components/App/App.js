import React from 'react'
import './App.css'
import PosterPage from '../PosterPage/PosterPage'
import Movie from '../Movie/Movie'
import { Route } from 'react-router-dom'

const App = () => {
  
  return (
    <main className="App">
      <h1 className="App-header">Top-Notch Tomatillos</h1>
      
      <Route exact path='/' render={() =>
        <>
          <PosterPage page={1} />
        </>
      }/>

      <Route
        exact path='/:num' 
        render={({ match }) =>
        <>
          <PosterPage page={match.params.num} />
        </>
      }/>

      <Route 
        exact path='/movie/:id' 
        render={({ match }) => <Movie movieID={parseInt(match.params.id)} />}
      />

    </main>
  )
}

export default App
