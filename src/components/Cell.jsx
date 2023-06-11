import React from "react";

function Cell({
  elem,
  id,
  player,
  setPlayer,
  cells,
  setCells,
  gameOver,
  setClicks,
}) {
  const handleClick = (e) => {
    if (gameOver === true) {
      return;
    }
    if (e.target.innerHTML === "") {
      setClicks((prev) => prev + 1);
      e.target.innerHTML = player;
      changeCells();
      if (player === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
    }
  };

  const changeCells = () => {
    let newCells = [...cells];
    newCells[id] = player;
    setCells(newCells);
  };

  return (
    <div className="cell grid-item" id={id} onClick={handleClick}>
      {elem}
    </div>
  );
}

export default Cell;
