import { createContext, useState } from 'react'

// 1. Crear el Contexto y ESTE es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto.
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters, setFilters
    }}
    >
      {children}

    </FiltersContext.Provider>
  )
}

/* El useContext consume del Provider. Esto quiere decir que el contexto que tenemos es Estatico, y eso es bueno. Podemos proveer a toda nuestra aplicacion pues el token, variables estaticas, contexto para los colores, inyectar configuración. Y ADEMAS, se pueden hacer estados globales. En este caso lo vamos hacer, pero no es solamente para eso. BIEN, seguim... */
