import { useRef, useState } from 'react'

export function ExplicacionUseRef () {
  const [query, setQuery] = useState()
  const counter = useRef(0)

  // El valor de la i siempre sera 1 porque cada vez que escribimos, se realiza un nuevo render y no persisten los datos.
  let i = 0
  i++
  console.log(i)

  // El valor de counter si que persiste porque estamos utilizando un useRef
  counter.current++
  console.log(counter.current)

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  return (
    <form action=''>
      <input onChange={handleChange} value={query} placeholder='text' />
    </form>
  )
}
