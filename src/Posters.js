import React from 'react'
import './Posters.css';
import { Link } from 'react-router-dom';

const Posters = ({ posters }) => {

  const moviePosters = posters.map(poster => {
    const {poster_path, id, title} = poster;

    return (
      <Link
        to={`/${id}`}
        key={id}  
      >
      <img
        src={poster_path}
        className='poster-icon'
        alt={title}
        id={id}
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