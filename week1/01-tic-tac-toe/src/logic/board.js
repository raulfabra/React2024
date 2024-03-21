import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras
  //para saber si hay ganador
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
    }
    // Si no hay ganador
  }
  return null;
};

export const checkEndGame = (boardToCheck) => {
  const isEmpate = boardToCheck.every((square) => square !== null);
  return isEmpate;
};
