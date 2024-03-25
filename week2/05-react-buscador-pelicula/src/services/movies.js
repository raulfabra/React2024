const API_KEY = '4dfed8ec'

export const searchMovies = async ({ query }) => {
  if (query === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const dataJson = await response.json()

    const movies = dataJson.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster

    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
