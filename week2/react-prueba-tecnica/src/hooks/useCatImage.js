import { useEffect, useState } from 'react'
import { getFirstThreeWords } from '../services/cuteCat'
import { CAT_ENDPOINT_RANDOM_IMAGE } from '../constants'

export const useCatImage = ({ facts }) => {
  const [word, setWord] = useState()
  // para obtener las tres primeras palabras del hecho del gato
  useEffect(() => {
    getFirstThreeWords({ facts }).then(newWord => setWord(newWord))
  }, [facts])

  return { imageUrl: `${CAT_ENDPOINT_RANDOM_IMAGE}${word}` }
}
