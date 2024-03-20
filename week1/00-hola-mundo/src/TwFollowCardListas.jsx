import { useState } from "react";

export function TwitterFollowCarduseState({
  children,
  formatUserName,
  userName,
}) {
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
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{texto}</button>{" "}
      </aside>
    </article>
  );
}
