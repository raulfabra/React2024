import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(query)

  const getMovies = async () => {
    if (query === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}

/* Como se puede ver, esta funcion MAPPEDMOVIES no se abre mediante llaves y si mediante parentesis. Esto es así porque de esta manera no hace falta usar el return. la variable con el interrogante es una manera de condicionar, en el ejemplo, si existe movies hazme el mapeo; si no, no devuelvas nada. */
