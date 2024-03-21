import { Square } from "./Square"

export function Board({ board, updateBoard }) {
   const renderSquare = () => {
      return board.map((_, index) => {
         return (
            <Square key={index} index={index} updateBoard={updateBoard}>
               {board[index]}
            </Square>
         )
      })
   }

   return <section className="game">{renderSquare()}</section>
}
