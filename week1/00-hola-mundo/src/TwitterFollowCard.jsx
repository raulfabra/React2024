export function TwitterFollowCard({ children, formatUserName, userName, isFollowing }) {
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
  //const addAt = (userName) => `@${userName}`;
  const imageSrc = `https://unavatar.io/${userName}`;
  console.log(isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="midudev" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          {/*<span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>*/}
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}>{texto}</button> {/*A esto se le llama children: el valor envuelto por una etiqueta*/}
      </aside>
    </article>
  );
}

//LO QUE VEMOS DE la clase button es la CLAVE para hacer que nuestra pagina web sea dinamica y React tenga sentido.