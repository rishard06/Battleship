import { Ship } from "../src/ship.js";


describe('Ship', () => {
    test('can register a hit', () => {
      const ship = Ship(3);
      ship.hit(1);
      expect(ship.isSunk()).toBe(false);
    });
  
    test('is sunk when all positions are hit', () => {
      const ship = Ship(2);
      ship.hit(0);
      ship.hit(1);
      expect(ship.isSunk()).toBe(true);
    });
  
    test('does not register hits outside the ship length', () => {
      const ship = Ship(3);
      ship.hit(4); // Out of bounds
      expect(ship.isSunk()).toBe(false);
    });
  });

