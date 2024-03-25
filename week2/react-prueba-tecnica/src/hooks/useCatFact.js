import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [facts, setFacts] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFacts(newFact))
  }
  // para recuperar la cita al cargar la pagina o por cambio de estado
  useEffect(refreshFact, [])

  return { facts, refreshFact }
}
