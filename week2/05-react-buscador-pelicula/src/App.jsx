import './App.css'
import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form action=''>
          <input placeholder='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <ul>
                {
              movies.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            }
              </ul>
              )
            : (
              <p>No se encuentran películas para esta búsqueda</p>
              )
        }
      </main>
    </>
  )
}

export default App
