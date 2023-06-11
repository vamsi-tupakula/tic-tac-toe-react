import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    checkWinner();
  }, [cells]);

  const checkWinner = () => {
    let temp = [...cells];
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    pattern.forEach((arr) => {
      if (
        temp[arr[0]] === temp[arr[1]] &&
        temp[arr[1]] === temp[arr[2]] &&
        temp[arr[0]] !== ""
      ) {
        setGameOver(true);
      }
    });
  };

  const handleReset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setGameOver(false);
    setClicks(0);
  };

  return (
    <>
      <div className="app">
        <h1 className="title">TIC TAC TOE</h1>
        <div className="container grid">
          {cells.map((elem, index) => {
            return (
              <Cell
                key={index}
                elem={elem}
                id={index}
                player={player}
                setPlayer={setPlayer}
                cells={cells}
                setCells={setCells}
                gameOver={gameOver}
                setClicks={setClicks}
              />
            );
          })}
        </div>
        <div className="flex">
          {gameOver === false ? (
            clicks === 9 ? (
              <p className="message draw">Match Drawn</p>
            ) : (
              <p className="message">
                It's <span className="tag">{player}</span> 's turn.
              </p>
            )
          ) : (
            <p className="message">
              Game Over!{" "}
              <span className="tag">{player === "X" ? "O" : "X"}</span> won.
            </p>
          )}
          <button className="btn" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
