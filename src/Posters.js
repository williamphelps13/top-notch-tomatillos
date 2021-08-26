import React from 'react'
import './Posters.css';

const Posters = ({ posters, clickPoster }) => {
  const moviePosters = posters.map(poster => {
  
    return (
      <input
        type="image"
        src={poster.poster_path}
        className='poster-icon'
        onClick={() => clickPoster()}
        alt='(movie title)'
        id={poster.id}
        key={poster.id}        
      />
    )
  })
  
  return (
    <section className='posters-container'>
      {moviePosters}
    </section>
  )
}

export default Posters;