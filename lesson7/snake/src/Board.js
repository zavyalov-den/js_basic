class Board {
  constructor(width, height, gameElement) {
    this.width = width;
    this.height = height;
    this.board = gameElement;
  }
  drawBoard() {
    for (let i = 0; i < this.width; i++) {
      let row = document.createElement("tr");
      this.board.appendChild(row);

      for (let j = 0; j < this.height; j++) {
        let col = document.createElement("td");
        row.appendChild(col);
      }
    }
  }

  clearBoard() {
    let elements = this.board.querySelectorAll("td");

    elements.forEach((element) => {
      if (element.classList.contains("snake")) {
        element.classList = "";
      }
    });
  }

  getElementByCoords(coords) {
    let el = this.board.querySelector(
      `tr:nth-child(${coords.y}) td:nth-child(${coords.x})`
    );
    return el;
  }

  drawSnake(snake) {
    snake.snakeBody.forEach((coord) => {
      let el = this.getElementByCoords(coord);
      el.classList.add("snake");
    });
  }
}
