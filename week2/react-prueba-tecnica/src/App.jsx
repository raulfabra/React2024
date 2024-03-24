import { useCatFact } from '../hooks/useCatFact'
import { Cat } from '../components/Cat'

export function App () {
  const { facts, refreshFact } = useCatFact()

  const handleCats = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCats}>Obtener otro gato</button>
      <Cat facts={facts} />

    </main>
  )
}
