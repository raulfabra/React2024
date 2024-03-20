import { useState } from "react";

export function TwitterFollowCarduseState({
  children,
  formatUserName,
  userName,
}) {
  /*const state = useState(false) //El hook useState nos devuelve `return` un array de 2 posiciones.
  const useFollowing = state[0] //La primera posicion sería el estado que se encuentra
  const setUseFollowing = state[1] //La segunda posiciond el array, es la funcion que va hacer cambiar el estado.*/

  //Podemos lo anterior desestructurar, ya que es una especialidad de Javascript, y nos permite ahorrar codigo, seria:
  const [isFollowing, setIsFollowing] = useState(false);

  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const imageSrc = `https://unavatar.io/${userName}`;
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="midudev" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          {/*<span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>*/}
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{texto}</button>{" "}
        {/*A esto se le llama children: el valor envuelto por una etiqueta*/}
      </aside>
    </article>
  );
}

//LO QUE VEMOS DE la clase button es la CLAVE para hacer que nuestra pagina web sea dinamica y React tenga sentido.

//Ahora empezamos con los estados de react para que el boton cambie si hemos hecho click en seguir y pase a siguiendo o dejar de seguir. Para ello, importamos lo primero de todo el userState que es un hooks (HAY MUCHOS hooks).
