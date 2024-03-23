import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
        // Bien, en este punto normalmente no te viene a la cabeza como sacar la primera palabra de lo que te devuelve el JSON, bla bla bla. Por lo que aconsejo que sepas almenos la funcion de split en las cadenas de texto. Esto hace dividir una cadena de texto a partir del token del separador que tu le digas. En este caso le decimos que lo haga a partir de los espacios (' ') y esto nos devuelve un array. Por lo tanto la primera palabra sera la posición [0].
        const firstWord = fact.split(' ')[0]
        /*
         Voy a dejar por aqui un ejemplo muy practico y se utiliza mucho en las cadenas de texto para sacar cosas concretas. Por ejemplo, a veces nos piden lo siguiente: Del fetching de datos, extraeme las 3 primeras palabras de los hechos(facts) y muestralos por pantalla.
         const threeFirstsWords = fact.split(' ').slice(0,3).join(' ')
         El split devuelve un array de muchas palabras (toda la cadena de texto), el slice mide que cantidad de palabras nos quedamos, en este caso del 0(principio) al 3 y por útlimo el Join que nos vuelve a transformar las tres palabras del array en cadena de texto.
        */
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then(res => res.json())
          .then(response => console.log(response))
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>

    </main>
  )
}
