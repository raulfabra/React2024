import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies } = useMovies()

  /* EJEMPLO COMENTARIO (2)
    const inputRef = useRef()

    const handleSubmit = (event) => {
    // UTILIZANDO EL HOOK useRef()
    event.preventDefault()
    const valor = inputRef.current.value
    console.log(valor)
    }

    return (<input ref={inputRef} placeholder='text' />)
  */

  const handleSubmit = (event) => {
    event.preventDefault()
    /*
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
    */
    const { query } = Object.fromEntries(new FormData(event.target))
    console.log(query)
  }

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' placeholder='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App

/* useRef es un hook que nos permite crear una referencia mutable que persiste durante todo el ciclo de vida de tu componente, y lo mejor es que muy util para guardar cualquier valor que puedas mutar (ej: elemento del DOM, identificador, contador, etc) y que cadavez que cambia no vuelve a renderizar el componente. Esta es la principal diferencia entre useState y useRef, que mientras el useState renderiza TODO el componente cuando cambia de estado, el useRef no dispara otro renderizado del componente por cambiar su valor/estado. */

/* Asi como tenemos en el ejemplo de 👆 estaría bien, pero te recomiendo que en vez de usar useRef para recuperar elementos del DOM lo hagas con javaScript puro (Vanilla) porque es mucho mas rápido, optimiza el rendimiento. Pero esto es una manera de controlar el formulario de manera No controlada, valga la redundancia. Esto quiere decir que no es React el que esta controlando el formulario si no desde el propio DOM manejamos la busqueda y los resultados. Esto es mas complejo a la hora de controlar/validar el formulario, ya que mediante REACT con hooks es mas sencillo de implementar. */

/* Ahora, el siguiente paso es hacerlo de forma controlada, mediante REACT con estados, y validaremos el formulario. Esto estará en APP.jsx, el fichero que realmente usamos, este actual es de explicación no controlada (DOM). */
