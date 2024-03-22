import React from "react";
import { useNearScreen } from "./useNearScreen";

export const Image = ({ src }) => {
  const [isNear, fromRef] = useNearScreen();

  return (
    <figure ref={fromRef}>
      {isNear && <img src={src} alt="lazy animal" />}
    </figure>
  );
};
