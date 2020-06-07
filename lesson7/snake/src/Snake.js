class Snake {
  direction = "down";

  constructor(board) {
    this.board = board;

    this.snakeBody = [
      {
        x: Math.floor(board.width / 2) + 1,
        y: Math.floor(board.height / 2) + 1,
      },
    ];
  }

  changeDirection(direction) {
    if (!this.oppositeDirection(direction)) {
      this.direction = direction;
    }
  }

  oppositeDirection(direction) {
    return (
      (this.direction == "down" && direction == "up") ||
      (this.direction == "up" && direction == "down") ||
      (this.direction == "left" && direction == "right") ||
      (this.direction == "right" && direction == "left")
    );
  }

  nextHeadPosition() {
    let headPosition = { ...this.snakeBody[0] };

    if (this.direction == "down") {
      headPosition.y++;
    }
    if (this.direction == "up") {
      headPosition.y--;
    }
    if (this.direction == "left") {
      headPosition.x--;
    }
    if (this.direction == "right") {
      headPosition.x++;
    }
    // checking wall collision

    if (headPosition.x < 1) headPosition.x = this.board.width;
    if (headPosition.x > this.board.width) headPosition.x = 1;
    if (headPosition.y < 1) headPosition.y = this.board.height;
    if (headPosition.y > this.board.height) headPosition.y = 1;

    return headPosition;
  }
}
