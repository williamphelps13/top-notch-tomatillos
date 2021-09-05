import dayjs from 'dayjs';

export const cleanPosterData = (data) => {
  return data.movies.map(movie => {
    return {
      id: movie.id, 
      poster_path: movie.poster_path, 
      title: movie.title
    }
  })
}

export const cleanMovieData = (data) => {
  return data = {
    movie: {
      backdrop_path: data.movie.backdrop_path,
      title: data.movie.title,    
      average_rating: `★ ${data.movie.average_rating.toFixed(1)}`,
      tagline: data.movie.tagline ? `"${data.movie.tagline}"` : '',
      overview: data.movie.overview,
      release_date: dayjs(data.movie.release_date).format('YYYY'),
      runtime: data.movie.runtime ? `${data.movie.runtime} Minutes` : '',
      genres: data.movie.genres
    }
  }
}