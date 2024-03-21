import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Board } from "./components/Board.jsx"
import { TurnDisplay } from "./components/TurnDisplay.jsx"

function App() {
   //IMPORTANTE❗❗ No podemos, esta prohibido, utilizar los hooks dentro de IF, de condiciones. Esto es porque React guarda los estados en un array interno por posiciones, de manera que si inicializamos un estado dentro de un if, cuando este no se cumpla, el orden cambiará al no existir en el renderizado. Cosa que a React no le gusta. Por lo tanto, los useState deben de estar siempre en el cuerpo del componente.
   const [board, setBoard] = useState(() => {
      const boardFromStorage = window.localStorage.getItem("board")
      if (boardFromStorage) return JSON.parse(boardFromStorage)
      else return Array(9).fill(null)
   })

   const [turn, setTurn] = useState(() => {
      const turnFromStorage = window.localStorage.getItem("turn")
      return turnFromStorage ?? TURNS.X
   })

   const [winner, setWinner] = useState(null) //null --> no ganador, false ---> false

   const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)

      window.localStorage.removeItem("board")
      window.localStorage.removeItem("turn")
   }

   const updateBoard = (index) => {
      //no actualizamos esta posicion
      //si ya tiene algo
      if (board[index] || winner) return
      //actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      //cambiar el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      //guardar partida
      window.localStorage.setItem("board", JSON.stringify(newBoard))
      window.localStorage.setItem("turn", newTurn)
      //revisar si hay ganador
      const newWinner = checkWinner(newBoard)
      if (newWinner) {
         confetti()
         setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
         setWinner(false) //empate
      }
   }

   return (
      <main className="board">
         <h1>Tic Tac Toe</h1>
         <button onClick={resetGame}>Reset del juego</button>
         <Board board={board} updateBoard={updateBoard} />
         <TurnDisplay turn={turn}/>
         <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
   )
}

export default App
