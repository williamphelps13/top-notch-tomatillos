import React from 'react'

const Posters = ({ posters }) => {
  const moviePosters = posters.map(poster => {
    return (
      <Poster
        url={poster.poster_path}
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