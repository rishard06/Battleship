import { Player } from '../src/player.js';
import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';

test('can attack an opponent board', () => {
    const player = Player('Player 1');
    const opponentBoard = Gameboard();
    const ship = Ship(2);
    opponentBoard.placeShip(ship, 0, 0, 'horizontal');
    player.attack(opponentBoard, 0, 0);
    player.attack(opponentBoard, 0, 1);
    player.attack(opponentBoard, 0, 2);
    expect(opponentBoard.gameboard[0][0].isSunk()).toBe(true);
});

test('can sink a ship with successive attacks', () => {
    const player = Player('Player 1');
    const opponentBoard = Gameboard();
    const ship = Ship(2);
    opponentBoard.placeShip(ship, 0, 0, 'horizontal');
    player.attack(opponentBoard, 0, 0);
    // player.attack(opponentBoard, 0, 1);
    expect(opponentBoard.allShipsSunk()).toBe(false);     
});