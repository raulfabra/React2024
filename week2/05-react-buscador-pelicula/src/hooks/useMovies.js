import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
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
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}

/* Como se puede ver, esta funcion MAPPEDMOVIES no se abre mediante llaves y si mediante parentesis. Esto es así porque de esta manera no hace falta usar el return. la variable con el interrogante es una manera de condicionar, en el ejemplo, si existe movies hazme el mapeo; si no, no devuelvas nada. */

/* Tambien vamos a ver los hooks useMemo y useCallback. Estos se utilizan para que, aquellas funciones que, hacen una llamada a la api por ejemplo y nos muestra los datos no se renderice cada vez que hay un cambio en algun estado en particular que NO AFECTA al renderizado de los datos. En otras palabras, el useMemo SIRVE para que no vuelva a llamar a la funcion en situaciones donde no nos interesa un renderizado continuo porque no esta afectando para nada al resultado de los datos que estamos viendo y SOLAMENTE se vuelvan a renderizar en el momento que SI CAMBIEMOS el estado de un elemento que influye en el cambio de los datos de la API. En resumen, con este hook lo que hacemos es memorizar un valor, lo estamos guardando y solo se ejecuta cuando cambiemos el estado de un elemento que nos haga cambiar el renderizado de los datos. */

/* El tema del useCallback es como El useMemo porque por detras trabaja como useMemo pero este no hace falta llamar a una funcion para que llame a otra funcion. Con el uso de useCallback directamente llamamos a la funcion asincrona. */
