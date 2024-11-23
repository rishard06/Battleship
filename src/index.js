import { Player } from './player.js';
import { renderBoard } from './ui.js';
import style from './style.css'




const player1 = new Player("player 1");
const computer = new Player("computer");

const ship1 = computer.gameboard.placeShip([0,0], "vertical", 2);
const ship2 = computer.gameboard.placeShip([0,4], "horizontal", 3);
const ship3 = computer.gameboard.placeShip([5,3], "horizontal", 5);

player1.attack(computer.gameboard, [0, 0])
player1.attack(computer.gameboard, [0, 1])

// document.querySelector("#computer-board").innerHTML = 

const player1Board = document.querySelector(".box1");
const computerBoard = document.querySelector(".box2");

renderBoard.board(player1.gameboard.grid, player1Board);
renderBoard.board(computer.gameboard.grid, computerBoard);

// console.log(ship1)
// console.log(computer.gameboard)
renderBoard.ships(ship1, computerBoard);
renderBoard.ships(ship2, computerBoard);
renderBoard.ships(ship3, computerBoard);

computerBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
        // Find the parent row
        const row = Array.from(computerBoard.children).indexOf(e.target.parentElement);
        // Find the column
        const col = Array.from(e.target.parentElement.children).indexOf(e.target);
    
        // console.log(`Clicked cell at (${row}, ${col})`);
        const hel = player1.attack(computer.gameboard, [row, col])
        // computer.gameboard.receiveAttack([row, col])
        e.target.classList.add(hel);
        console.log(computer.gameboard.receiveAttack)
      }
    
});