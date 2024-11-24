import { Player } from './player.js';
import { renderBoard } from './ui.js';
import { randoms } from './randomCoords.js';
import style from './style.css'

const player1 = new Player("player 1");
const computer = new Player("computer");

const ranCoord1 = randoms.randomCoord(10, 2);
const ranCoord2 = randoms.randomCoord(10, 3);
const ranCoord3 = randoms.randomCoord(10, 3);
const ranCoord4 = randoms.randomCoord(10, 4);
const ranCoord5 = randoms.randomCoord(10, 5);
console.log(ranCoord1.x, ranCoord1.y, ranCoord1.direction)

const ship1 = computer.gameboard.placeShip([ranCoord1.x,ranCoord1.y], ranCoord1.direction, 2);
const ship2 = computer.gameboard.placeShip([0,4], "horizontal", 3);
const ship3 = computer.gameboard.placeShip([2,3], "horizontal", 3);
const ship4 = computer.gameboard.placeShip([7,4], "horizontal", 4);
const ship5 = computer.gameboard.placeShip([5,3], "horizontal", 5);

const player1Board = document.querySelector(".box1");
const computerBoard = document.querySelector(".box2");

renderBoard.board(player1.gameboard.grid, player1Board);
renderBoard.board(computer.gameboard.grid, computerBoard);

renderBoard.ships(ship1, computerBoard);
renderBoard.ships(ship2, computerBoard);
renderBoard.ships(ship3, computerBoard);

computerBoard.addEventListener('click', function eventHundler(e) {
    if (e.target.classList.contains('cell')) {
        const row = Array.from(computerBoard.children).indexOf(e.target.parentElement);
        const col = Array.from(e.target.parentElement.children).indexOf(e.target);

        const hel = player1.attack(computer.gameboard, [row, col])
        // computer.gameboard.receiveAttack([row, col])
        // console.log(computer.gameboard.receiveAttack)
        console.log(hel)
        if (hel === "sunk" || "hit") {
            e.target.classList.add("hit");
        }
        if (hel === "miss") {
            e.target.classList.add("miss")
        }
        console.log(computer.gameboard.allShipsSunk())
    }
    
    if (computer.gameboard.allShipsSunk()) {
        alert("player Wins!");
        this.removeEventListener("click", eventHundler)
    }
});