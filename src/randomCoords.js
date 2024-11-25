export class randoms {
    static randomCoord(gridSize, shipLength) {
        const isHorizontal = Math.random() < 0.5;
        const direction = isHorizontal ? "horizontal" : "vertical";

        const x = isHorizontal ? Math.floor(Math.random() * gridSize)
        : Math.floor(Math.random() * (gridSize - shipLength + 1));

        const y = isHorizontal ? Math.floor(Math.random() * (gridSize - shipLength + 1))
        : Math.floor(Math.random() * gridSize);

        return { x, y, isHorizontal, direction, shipLength};
    }

    static isPlacementValid(board, x, y, isHorizontal, shipLength) {
        for (let i = 0; i < shipLength; i++) {
          const cellX = isHorizontal ? x : x + i;
          const cellY = isHorizontal ? y + i : y;
      
          // Check boundaries and if the cell is occupied
          if (cellX >= board.size || cellY >= board[cellX].length || board[cellX][cellY]) {
            return false;
          }
        }
        return true;
    }

    static placeRandomShip(board, shipLength) {
        let validPlacement = false;
        let coords;
      
        while (!validPlacement) {
          coords = this.randomCoord(board.size, shipLength);
          validPlacement = this.isPlacementValid(board.grid, coords.x, coords.y, coords.isHorizontal, shipLength);
        }

        return coords
    }
}