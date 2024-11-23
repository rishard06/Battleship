import { Gameboard } from "./gameboard.js";

export class Player {
  constructor (name, boardSize = 10) {
    this.name = name;
    this.gameboard = new Gameboard(boardSize);
  }

  attack(opponentBoard, coord) {
    return opponentBoard.receiveAttack(coord);
  }
}