import { Player } from '../src/player.js';

describe('Player', () => {
    let player1, player2;
  
    beforeEach(() => {
      player1 = new Player('Player1');
      player2 = new Player('Player2');
      player2.gameboard.placeShip([0, 0], 'horizontal', 3);
    });
  
    test('attacks opponent board and hits a ship', () => {
      const result = player1.attack(player2.gameboard, [0, 0]);
      expect(result).toBe('hit');
    });
  
    test('attacks opponent board and misses', () => {
      const result = player1.attack(player2.gameboard, [1, 1]);
      console.log(player2.gameboard.grid)
      expect(result).toBe('miss');
    });
  });