class Game {
  constructor(board, snake, speed, win) {
    this.board = board;
    this.snake = snake;
    this.speed = speed;
    this.winLength = win;
  }

  score = 0;
  reward = 100;

  init() {
    this.board.drawBoard();
    this.createFood();
    document.addEventListener("keydown", this.keyBindings.bind(this));
  }

  nextTick() {
    this.board.clearBoard();
    this.step();
    this.board.drawSnake(this.snake);
  }

  step() {
    if (this.snakeCollisionOccured(this.snake.nextHeadPosition())) {
      alert("GAME OVER \n your score is " + this.score);
      location.reload();
    }

    this.snake.snakeBody.unshift(this.snake.nextHeadPosition());

    if (this.foodCollisionOccurred(this.snake.snakeBody[0])) {
      this.increaseScore();
      this.updateScore();
      this.createFood();
    } else {
      this.snake.snakeBody.pop();
    }
    if (this.checkWinCondition()) {
      alert("You won! \n your score is " + this.score);
      location.reload();
    }
  }

  foodCollisionOccurred(coords) {
    let el = this.board.getElementByCoords(coords);

    if (el.classList.contains("food")) {
      el.classList.remove("food");
      return true;
    } else return false;
  }

  snakeCollisionOccured(coords) {
    let el = this.board.getElementByCoords(coords);

    if (el.classList.contains("snake")) {
      console.log("collision detected");
      return true;
    }
  }

  checkWinCondition() {
    return this.snake.snakeBody.length >= this.winLength;
  }

  keyBindings(e) {
    if (e.key == "w") this.snake.changeDirection("up");
    if (e.key == "s") this.snake.changeDirection("down");
    if (e.key == "a") this.snake.changeDirection("left");
    if (e.key == "d") this.snake.changeDirection("right");
    if (e.key == " ") this.start();
  }

  createFood() {
    let elements = document.querySelectorAll("td:not(.snake)");
    let randElem = elements[Math.floor(Math.random() * elements.length)];
    randElem.classList.add("food");
  }

  increaseScore() {
    this.score += this.reward * this.speed;
  }

  updateScore() {
    document.getElementById("score").innerText = "Score: " + this.score;
  }

  start() {
    setInterval(this.nextTick.bind(this), 1000 / this.speed);
  }
}
