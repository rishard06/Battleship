import { Ship } from './ship.js';

export function Gameboard() {
    const gameboard = Array(10).fill(null).map(() => Array(10).fill(null));
    const ships = [];

    const placeShip = (ship, x, y, direction) => {
        if (direction === "horizontal") {
            for (let i = 0; i < ship.length; i++){
                gameboard[x][y + i] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++){
                gameboard[x + i][y] = ship;
            }
        }
        ships.push(ship);

    }
    
    const receiveAttack = (x, y) => {
        const target = gameboard[x][y];

        if (target && target.hit) {
            target.hit(); // Call the ship's hit method
          }
          return target !== null;
    }

    const allShipsSunk = () => ships.every((ship) => ship.isSunk());
    
    return { placeShip, receiveAttack, allShipsSunk, gameboard };
}

// console.log(Gameboard().gameboard)