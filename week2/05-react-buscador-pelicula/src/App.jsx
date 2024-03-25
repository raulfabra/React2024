import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { query, setQuery, error } = useQuery()
  const { movies, getMovies } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(query => {
      console.log('query', query)
      getMovies({ query })
    }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return undefined
    setQuery(newQuery)
    // Validacion se podría, pero esta vez esta dentro de un useEffect en un costumHook
    // Ahora queremos que mientras escribimos en nuestra búsqueda vaya sacando las películas 👇
    // getMovies({ query: newQuery })
    // El problema de tener esto así sin hacer un debounce, es que vamos a estar buscando peliculas en cada letra que escribamos y se va a volver loco por que cada fetching necesita un tiempo de carga, y si se introduce a una alta velocidad el nombre de la pelicula te sacara resultados antiguos.
    // Un debounce sería, vamos a dejar que el usuario escriba, no vamos hacer nada y esperaremos X-ms, para que la ultima llamada sea la que verdaderamente se vaya a disparar.👇 👇
    debouncedGetMovies(newQuery)
  }

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={query} name='query' placeholder='text' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
