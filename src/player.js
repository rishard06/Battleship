export default function Player(name) {
    const attack = (gameboard, x, y) => {
      return gameboard.receiveAttack(x, y);
    };
  
    return { name, attack };
  }