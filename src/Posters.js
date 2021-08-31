import React from 'react'
import './Posters.css';
import { Link } from 'react-router-dom';

const Posters = ({ posters, clickPoster }) => {

  const moviePosters = posters.map(poster => {
    const {poster_path, id, title} = poster;

    return (
      <Link
        to={`/${id}`}
      >
      <input
        type="image"
        src={poster_path}
        className='poster-icon'
        onClick={() => clickPoster(id)}
        alt={title}
        id={id}
        key={id}        
      />
      </Link>
    )
  })
  
  return (
    <section className='posters-container'>
      {moviePosters}
    </section>
  )
}

export default Posters;