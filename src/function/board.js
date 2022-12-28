export default function createBoard() {
  let board = document.createElement("div");
  board.setAttribute("id", "mainBoard");

  for (let x = 1; x <= 8; x++) {
    let color = "";

    for (let y = 1; y <= 8; y++) {
      if (x % 2 !== 0) {
        y % 2 == 0 ? (color = "white") : (color = "black");
      } else {
        y % 2 == 0 ? (color = "black") : (color = "white");
      }

      let pieceBoard = document.createElement("div");
      pieceBoard.setAttribute("id", `${x}-${y}`);
      pieceBoard.classList.add("piece");
      pieceBoard.classList.add(color);
      board.appendChild(pieceBoard);
    }
  }
  return board;
}
