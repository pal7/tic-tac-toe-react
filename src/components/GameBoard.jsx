import React from "react";

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSquareClick(rowIndex, colIndex) {
  // console.log(rowIndex, colIndex);
  // setGameBoard((prevGameBoard) => {
  // deep copy of object/array to make the state object(array here) immutable
  // const updatedBoard = [...prevGameBoard].map((innerArray) => [
  // ...innerArray,
  // ]);
  // updatedBoard[rowIndex][colIndex] = activeSymbol;
  // return updatedBoard;
  // });

  // onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
