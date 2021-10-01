import dayjs from 'dayjs'

export const cleanPosterData = (data) => {
  return data.results.map(movie => {
    return {
      id: movie.id, 
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
      title: movie.title
    }
  })
}

export const cleanMovieData = (data) => {
  return {
    backdrop_path: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    title: data.title,    
    average_rating: `★ ${data.vote_average.toFixed(1)}`,
    tagline: data.tagline ? `"${data.tagline}"` : '',
    overview: data.overview,
    release_date: dayjs(data.release_date).format('MM-DD-YYYY'),
    runtime: data.runtime ? `${data.runtime} Minutes` : '',
    genres: data.genres.map(genre => genre.name)
  }
}