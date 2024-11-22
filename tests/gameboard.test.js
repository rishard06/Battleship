import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

describe('Gameboard', () => {
    let board;
  
    beforeEach(() => {
      board = new Gameboard();
    });
  
    test('places a ship correctly on the board', () => {
      board.placeShip([0, 0], 'horizontal', 3);
      expect(board.grid[0][0]).toBeTruthy();
      expect(board.grid[0][1]).toBeTruthy();
      expect(board.grid[0][2]).toBeTruthy();
    });
  
    test('throws error for invalid ship placement', () => {
      expect(() => board.placeShip([9, 9], 'horizontal', 3)).toThrow('Invalid placement');
    });
  
    test('records a hit on a ship', () => {
      board.placeShip([0, 0], 'horizontal', 3);
      expect(board.receiveAttack([0, 0])).toBe('hit');
    });
  
    test('records a miss when no ship is hit', () => {
      expect(board.receiveAttack([0, 0])).toBe('miss');
    });
  
    test('tracks missed attacks', () => {
      board.receiveAttack([0, 0]);
      expect(board.missedAttacks).toContainEqual([0, 0]);
    });
  
    test('allShipsSunk() returns false when not all ships are sunk', () => {
      board.placeShip([0, 0], 'horizontal', 3);
      expect(board.allShipsSunk()).toBe(false);
    });
  
    test('allShipsSunk() returns true when all ships are sunk', () => {
      board.placeShip([0, 0], 'horizontal', 1);
      board.placeShip([4, 0], 'vertical', 3)
      board.receiveAttack([0, 0]);
      board.receiveAttack([0, 5]);
      board.receiveAttack([4, 0]);
      board.receiveAttack([5, 0]);
      board.receiveAttack([6, 0]);

      // console.log(board)
      expect(board.allShipsSunk()).toBe(true);
    });
  });