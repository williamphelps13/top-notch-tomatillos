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
  const {backdrop_path, title, average_rating, tagline, overview, release_date, runtime, genres} = data.movie;

  return data = {
      backdrop_path: backdrop_path,
      title: title,    
      average_rating: `★ ${average_rating.toFixed(1)}`,
      tagline: tagline ? `"${tagline}"` : '',
      overview: overview,
      release_date: dayjs(release_date).format('YYYY'),
      runtime: runtime ? `${runtime} Minutes` : '',
      genres: genres
  }
}