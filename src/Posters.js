import React from 'react'

const Posters = ({ posters }) => {
  const moviePosters = posters.map(poster => {
    return (
      <Poster
        url={poster.poster_path}
      />
    )
  })

}

export default Posters;