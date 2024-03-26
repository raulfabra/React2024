import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addCart = product => {
    /* Si eres un junior y estas empezando a probar esto, te consejo hacer un spread operator (copia del array) de cart y añadir producto:
    setCart([...cart, product])
    Esta seria la forma sencilla. Pero queremos hacer que si ya esta en el carro el producto que sume la cantidad (Qty) 👇👇
    */

    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart) // StructuredClone hace copias profundas de los arrays y objetos
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // if the product don't exist
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => { setCart([]) }

  return (
    <CartContext.Provider value={{ cart, addCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
