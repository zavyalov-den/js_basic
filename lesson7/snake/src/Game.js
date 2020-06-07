class Game {
  constructor(board, snake, speed) {
    this.board = board;
    this.snake = snake;
    this.speed = speed;
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
    this.snake.snakeBody.unshift(this.snake.nextHeadPosition());

    if (this.snakeCollisionOccured(this.snake.nextHeadPosition())) {
      alert("GAME OVER \n your score is " + this.score);
      location.reload();
    }

    if (this.foodCollisionOccurred(this.snake.snakeBody[0])) {
      this.increaseScore();
      this.updateScore();
      this.createFood();
    } else {
      this.snake.snakeBody.pop();
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
