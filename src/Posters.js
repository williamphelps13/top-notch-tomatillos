import React from 'react'
import './Posters.css';

const Posters = ({ posters, clickPoster }) => {

  const moviePosters = posters.map(poster => {
    const {poster_path, id, title} = poster;

    return (
      <input
        type="image"
        src={poster_path}
        className='poster-icon'
        onClick={() => clickPoster(id)}
        alt={title}
        id={id}
        key={id}        
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