import withMovies from '../mocks/with-results.json'
import withoutMovies from '../mocks/no-results.json'
import { useState } from 'react'

export function useMovies ({ query }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (query) {
      // setResponseMovies(withMovies)
      fetch(`https://www.omdbapi.com/?apikey=4dfed8ec&s=${query}`)
        .then(res => res.json())
        .then(json => setResponseMovies(json))
    } else {
      setResponseMovies(withoutMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}

/* Como se puede ver, esta funcion MAPPEDMOVIES no se abre mediante llaves y si mediante parentesis. Esto es así porque de esta manera no hace falta usar el return. la variable con el interrogante es una manera de condicionar, en el ejemplo, si existe movies hazme el mapeo; si no, no devuelvas nada. */
