import { Player } from './player.js';
import { renderBoard } from './ui.js';
import { randoms } from './randomCoords.js';
import style from './style.css'

const player1 = new Player("player 1");
const computer = new Player("computer");

const ranCoord1 = randoms.placeRandomShip(computer.gameboard, 2);
const ranCoord2 = randoms.placeRandomShip(computer.gameboard, 3);
const ranCoord3 = randoms.placeRandomShip(computer.gameboard, 3);
const ranCoord4 = randoms.placeRandomShip(computer.gameboard, 4);
const ranCoord5 = randoms.placeRandomShip(computer.gameboard, 5);

const ship1 = computer.gameboard.placeShip([ranCoord1.x,ranCoord1.y], ranCoord1.direction, ranCoord1.shipLength);
const ship2 = computer.gameboard.placeShip([ranCoord2.x,ranCoord2.y], ranCoord2.direction, ranCoord2.shipLength);
const ship3 = computer.gameboard.placeShip([ranCoord3.x,ranCoord3.y], ranCoord3.direction, ranCoord3.shipLength);
const ship4 = computer.gameboard.placeShip([ranCoord4.x,ranCoord4.y], ranCoord4.direction, ranCoord4.shipLength);
const ship5 = computer.gameboard.placeShip([ranCoord5.x,ranCoord5.y], ranCoord5.direction, ranCoord5.shipLength);

console.log(computer.gameboard, ship1)

const player1Board = document.querySelector(".box1");
const computerBoard = document.querySelector(".box2");

renderBoard.board(player1.gameboard.grid, player1Board);
renderBoard.board(computer.gameboard.grid, computerBoard);

renderBoard.ships(ship1, computerBoard);
renderBoard.ships(ship2, computerBoard);
renderBoard.ships(ship3, computerBoard);
renderBoard.ships(ship4, computerBoard);
renderBoard.ships(ship5, computerBoard);

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