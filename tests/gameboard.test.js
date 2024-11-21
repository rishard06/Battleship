import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

test("gameboard place ship horizontal", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    expect(gameboard.gameboard[0][0]).toBe(ship);
    expect(gameboard.gameboard[0][1]).toBe(ship);
    expect(gameboard.gameboard[0][2]).toBe(ship);
})

test("gameboard place ship vertical", () => {
    const gameboard = Gameboard();
    const ship = Ship(5);
    gameboard.placeShip(ship, 0, 0, 'vertical');
    expect(gameboard.gameboard[0][0]).toBe(ship);
    expect(gameboard.gameboard[1][0]).toBe(ship);
    expect(gameboard.gameboard[2][0]).toBe(ship);
    expect(gameboard.gameboard[3][0]).toBe(ship);
    expect(gameboard.gameboard[4][0]).toBe(ship);
});

test('recieve an attack', () => {
    const gameboard = Gameboard();
    const ship = Ship(2);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    // console.log(gameboard.gameboard)
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    expect(ship.isSunk()).toBe(false);
})