import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
