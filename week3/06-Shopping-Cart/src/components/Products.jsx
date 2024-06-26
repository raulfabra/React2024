import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  return (
    <main>
      <ul className='products'>
        {
            products?.map(product => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            ))
        }
      </ul>
    </main>
  )
}
