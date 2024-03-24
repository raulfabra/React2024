import { CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

/*
export function getRandomFact () {
  fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact')
      return res.json()
    })
    .then(data => {
      return data.fact
      // Bien, en este punto normalmente no te viene a la cabeza como sacar la primera palabra de lo que te devuelve el JSON, bla bla bla. Por lo que aconsejo que sepas almenos la funcion de split en las cadenas de texto. Esto hace dividir una cadena de texto a partir del token del separador que tu le digas. En este caso le decimos que lo haga a partir de los espacios (' ') y esto nos devuelve un array. Por lo tanto la primera palabra sera la posición [0]. Y mejor hacerlo en otro useEffect
    })
    .catch(err => {
      console.log(err)
      // tanto si hay un error con la respuesta
      // como si hay error en la petición
    })
}
*/
