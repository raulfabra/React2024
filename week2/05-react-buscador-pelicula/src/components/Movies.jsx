/* ❔❔ Esta funcion de listOfMovies estaría bien y todo guay. Pero imaginate que nos cambian el contrato de la API y el json se accede de otra manera, cambian las propiedades, etc. Abría que ir a todos los mapeos e ir cambiando y esto dependiendo de la api puede ser tedioso. Para ello te recomiendo hacer un mapeo externo, guardandolo en una variable y que todos los renderizados de la UI utilicen esta variable para acceder al contrato de la API, asi nos aseguramos que en un futuro si cambia el contrato solamente irémos a esa variable y con un cambio afectara a toda nuestra aplicación. Aqui te dejo la funcion antigua: 👇
function ListOfMovies ({ movies }) {
  return (
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
}
*/

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
    }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? (<ListOfMovies movies={movies} />)
      : (<NoMoviesResult />)
  )
}
