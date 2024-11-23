import { Ship } from './ship.js';

export class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.grid = Array(size).fill(null).map(() => Array(size).fill(null));
        this.ships = [];
        this.missedAttacks = [];
    }

    placeShip = (startCoord, direction, length) => {
        const ship = new Ship(length);
        const [x, y] = startCoord;
        const coords = [];

        for (let i = 0; i < length; i++) {
            const coord = direction === "horizontal" ? [x, y + i] : [x + i, y];
            if (coord[0] >= this.size || coord[1] >= this.size || this.grid[coord[0]][coord[1]]) {
                throw new Error('Invalid placement');
            }
            coords.push(coord);
        }

        coords.forEach(([cx, cy]) => (this.grid[cx][cy] = ship));
        this.ships.push(ship);
        return coords
    }
    
    receiveAttack (coord) {
        const [x, y] = coord;
        const target = this.grid[x][y];
        if (target === null) {
            this.missedAttacks.push(coord);
            return "miss";
        }
        target.hit();
        return target.isSunk() ? "sunk" : "hit";
    }

    allShipsSunk () {
        return this.ships.every((ship) => ship.isSunk());
    };
}