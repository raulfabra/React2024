# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API.
- Recuperar la primera palabra del hecho recuperado usando la segunda API.
- Muestra una imagen de un gato con la primera palabra.


CONSEJOS by RAUL y TEORIA PARA MEMORIZAR

En las pruebas las podríamos hacer con WebPack, si quieres hacerlo con create-react-app, con Next.JS, Con VITE...
Y muchas veces directamente nos dejan con el template que te forman ya estos entornos porque quieren ver solamente como codificias y como usas los estados y los hooks en este caso REACT.

Pero muchos CEO's piensan que para aprender un Framework, para demostrar que sabes programar de verdad, te dicen que no uses ningun template y que lo configures tu desde 0. Esto es muy importante que se entienda, puesto que tiene su parte de razón ya que porque nos lo den medio hecho muchas cosas HAY QUE SABER QUE OCURRE DETRAS DE TODO ESE PROCESO.

❗❗Importante saber configurar los Framework mediante el lenguaje puro---------> en este caso sera Javascript Vanilla -> config. REACT  [VITE]

Obviamente existen plugins que nos facilitan las configuraciones, normalmente aqui no hay problema, no impiden esto pues ya sería entrar en una complicación que para una prueba tecnica para Trainee/Junior es muy sospechosa. Es decir, al igual que existe un plugin como Babel para WebPack, ya existe un plugin de VITE que sirve para config React mas agilmente. Se llama @vitejs/plugin-react *(Añadimos -E para tener la version exacta)

Entonces a partir de aqui, hay que saber que dependencias hay que instalar (Pd: Todo esto es para configurar React en Vite) :
npm install    react            react-dom       (-E)

Ahora, hay que configurar vite.
#1 - crear vite.config.js  (NOS DEJAN MIRAR DOCUMENTACION)
#2 - Aplicar codigos que basicamente es exportar el objeto Default con las funciones de React (importando react del plugin)
#3 - Inicializar nuestra aplicacion. Como?
    .Borrando todo el main y configurando el createRoot del plugin react-dom
    .utilizando el createRoot para llegar hasta el elemento del Dom by ID que se llama app (esta en el index.html)
    .asignarle a una variable (root por defecto) el elemento y hacer un .render con las etiquetas que queramos.

#4 - Pasar el main a la extension jsx porque si no a vite no le gusta a la hora de compilar el codigo.
#5 - Saber explicar todos estos pasos anteriores, enteder la configuracion y LISTO!

pd: explicacion muy por encima de lo que estamos haciendo... El index.html es nuestra pag.web y tiene un script que esta cargando el Main.js, y este main.js es nuestro punto de entrada de nuestra aplicacion.