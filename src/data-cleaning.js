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