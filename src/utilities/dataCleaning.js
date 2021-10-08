import dayjs from 'dayjs'

export const cleanPosterData = (data) => {
  return data.results.map(movie => {
    return {
      id: movie.id,
      posterPath: movie.poster_path === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mcHVzLjjPjJNNYOT8v2f0rYU2C5wzvf_BnvhayR8N6ENCTXSP9quG0ejpmJ2w6EBWYw&usqp=CAU' : `https://image.tmdb.org/t/p/w500${movie.poster_path}` ,
      title: movie.title,
      rating: movie.rating ? `★ ${movie.vote_average}`: '',
      votes: movie.votes ? movie.vote_count: '',
      releaseDate: movie.releaseDate ? dayjs(data.release_date).format('MM-DD-YYYY'): '',
      popularity: movie.popularity
    }
  })
}

export const cleanMovieData = (data) => {
  return {
    backdropPath: data.backdrop_path === null ? 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/1588110162/GettyImages-508300585.jpg?itok=xs9uvgJW' : `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    title: data.title,    
    rating: data.rating ? `★ ${data.vote_average}` : '',
    tagline: data.tagline ? `"${data.tagline}"` : '',
    overview: data.overview ? data.overview : '',
    releaseDate: data.releaseDate ? dayjs(data.release_date).format('MM-DD-YYYY') : '',
    runtime: data.runtime ? `${data.runtime} Minutes` : '',
    genres: data.genres ? data.genres.map(genre => genre.name) : '',
  }
}

export const cleanVideoData = (data) => {
  return data.results[0].key
}

export const cleanImageData = (data) => {
  return data.backdrops.map(review => review.file_path === null ? 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/1588110162/GettyImages-508300585.jpg?itok=xs9uvgJW' : `https://image.tmdb.org/t/p/original${review.file_path}`)
}
