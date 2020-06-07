// import { Board } from "./Board";

const gameEl = document.getElementById("game");

const board = new Board(21, 21, gameEl);
const snake = new Snake(board);
const game = new Game(board, snake, 6);

game.init();
