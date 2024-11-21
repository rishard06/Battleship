import Gameboard from './gameboard';
import Player from './player';
import { renderBoard } from './ui';

const playerBoard = Gameboard();
const computerBoard = Gameboard();
const player = Player('Player');
const computer = Player('Computer');

// Set up the UI
const playerContainer = document.querySelector('#player-board');
const computerContainer = document.querySelector('#computer-board');

// Place some ships as a test
playerBoard.placeShip(Ship(3), 0, 0, 'horizontal');
computerBoard.placeShip(Ship(3), 2, 2, 'vertical');

// Main game loop
const playGame = () => {
  // Render boards
  renderBoard(playerBoard.board, playerContainer);
  renderBoard(computerBoard.board, computerContainer);

  // Add click event for attacking the computer
  computerContainer.addEventListener('click', (e) => {
    const x = ...; // calculate x from event
    const y = ...; // calculate y from event
    player.attack(computerBoard, x, y);
    // Check if the game is over
  });
};

playGame();