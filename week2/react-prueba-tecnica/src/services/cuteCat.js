export const getFirstThreeWords = async ({ facts }) => {
  const fact = await facts
  if (!fact) return
  return fact.split(' ').slice(0, 3).join(' ')
}

/*
export function getFirstThreeWords ({ facts }) {
  if (!facts) return
  // return (facts.split(' ')[0])
  return facts.split(' ').slice(0, 3).join(' ')
}
  /*
     Voy a dejar por aqui un ejemplo muy practico y se utiliza mucho en las cadenas de texto para sacar cosas concretas. Por ejemplo, a veces nos piden lo siguiente: Del fetching de datos, extraeme las 3 primeras palabras de los hechos(facts) y muestralos por pantalla.
     const threeFirstsWords = fact.split(' ').slice(0,3).join(' ')
     El split devuelve un array de muchas palabras (toda la cadena de texto), el slice mide que cantidad de palabras nos quedamos, en este caso del 0(principio) al 3 y por útlimo el Join que nos vuelve a transformar las tres palabras del array en cadena de texto.
    */
