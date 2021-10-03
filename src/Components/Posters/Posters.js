import React from 'react'
import './Posters.css'
import { Link } from 'react-router-dom'

const Posters = ({ posters, loadPage }) => {

  const moviePosters = posters.map(poster => {
    const {id, populartity, posterPath, title, rating, votes, releaseDate} = poster

    return (
      <Link
        to={`/${id}`}
        key={id}  
      >
      {/* <article className='flip-card-container'> */}
        <img
          src={posterPath}
          className='poster-icon'
          alt={`${title} Movie Poster and Button`}
          id={id}
        />
        {/* <div className='flip-card-back'>
          <p>{rating}</p>
          <p>{releaseDate}</p>
        </div> */}
      {/* </article> */}
      </Link>
    )
  })
  
  return (
    <section className='posters-container'>
      <section>
        <button onClick={event => loadPage(1)}>1</button>
        <button onClick={event => loadPage(2)}>2</button>
        <button onClick={event => loadPage(3)}>3</button>
        <button onClick={event => loadPage(4)}>4</button>
        <button onClick={event => loadPage(5)}>5</button>
      </section>
      {moviePosters}
    </section>
  )
}

export default Posters