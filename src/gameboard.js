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
        const cell = gameboard[x][y];

        if (cell) {
            cell.hit();
            return "hit";
        } else {
            gameboard[x][y] = "miss";
            return "miss";
        }
    }

    const allShipsSunk = () => ships.every((ship) => ship.isSunk());
    
    return { placeShip, receiveAttack, allShipsSunk, gameboard };
}

// console.log(Gameboard().gameboard)