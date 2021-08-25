import React from 'react'

const Posters = ({ posters }) => {
  const moviePosters = posters.map(poster => {
    return (<img className='poster-icon' src={poster.poster_path}></img>)
  })
  
  return (
    <section className='posters-container'>
      {moviePosters}
    </section>
  )
}

export default Posters;