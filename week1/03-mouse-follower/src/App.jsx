import { useEffect, useState } from "react"

function App() {
   const [enabled, setEnabled] = useState(false)

   const [position, setPosition] = useState({ x: 0, y: 0})
   //Una de las cosas que sirve mucho el hook useEffect es para acceder a API's de terceros. Porque en el cuerpo de un componente siempre se reproduce cada vez que se renderiza (cambia el estado) de un elemento, por lo que tendríamos millones de llamadas a una api que solo nos interesa pedirle informacion una vez suceda algo o en el primer renderizado

   // Por lo tanto, con el useEffect yo controlo cuando voy hacer fetch de los datos, cuando me voy a suscribir a los eventos, cuando hago el track. Con el useEffect puedo controlar cuando quiero en el momento que yo quiera donde yo quiera.

   //Otra cosa a tener en cuenta son las suscripciones a eventos hay que LIMPIARLAS. Que quiere decir esto? Fácil. Cuando escuchamos un evento de nuestro SO, y nos suscribimos, aunque sea mediante condiciones, que una vez se cumplen no debería ejecutarse, en los EVENTOS no funciona de esa manera y una vez suscrito HAY QUE INDICARLE IMPERATIVAMENTE QUE SE QUITE EL SUSCRITO. ESTO SE HACE CON un clean useEffect

   //Y como se hace esto? Hay que devolver una funcion en el useEffect, y en la funcion puedes devolver como limpiar esto.
   //Y cuando se ejecuta esto del return? Pues se ejecuta siempre que se desmonte el componente, es decir deja de renderizarse la funcion del componente, entonces React ejecuta el return del useEffect. Y TAMBIEN, cuando cambia la dependecia.

   //Trunco en consola para ver los eventos que se estan suscribiendo: getEventListeners(window)

   //Efecto pointeMove
   useEffect(() => {

      const handleMove = (event) => {
         const { clientX, clientY } = event
         setPosition({ x: clientX, y: clientY })
      }

      if (enabled) window.addEventListener("pointermove", handleMove)
      //Cleanup
      //Cuando cambia la dependencia, antes de ejecutar el efecto de nuevo
      return () => window.removeEventListener("pointermove", handleMove)

   }, [enabled])

   //change body className
   useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => document.body.classList.remove('no-cursor')
    
   }, [enabled])

   return (
      <main>
         <div
            style={{
               position: "absolute",
               backgroundColor: "#09f",
               borderRadius: "50%",
               opacity: 0.8,
               pointerEvents: "none",
               left: -20,
               top: -20,
               width: 40,
               height: 40,
               transform: `translate(${position.x}px, ${position.y}px)`,
            }}
         />
         <button onClick={() => setEnabled(!enabled)}>
            {enabled ? "Desactivar" : "Activar"} puntero
         </button>
      </main>
   )
}

export default App
