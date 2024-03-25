import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useState, useId } from 'react'

export function Filters () {
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input type='range' name='price' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name='category' id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Teléfonos Movil</option>
        </select>
      </div>

    </section>
  )
}
