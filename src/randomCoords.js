export class randoms {
    static randomCoord(gridSize, shipLength) {
        const isHorizontal = Math.random() < 0.5;

        const x = isHorizontal 
        ? Math.floor(Math.random() * gridSize)
        : Math.floor(Math.random() * (gridSize - shipLength + 1));

        const y = isHorizontal
        ? Math.floor(Math.random() * (gridSize - shipLength + 1))
        : Math.floor(Math.random() * gridSize);

        const direction = isHorizontal ? "horizontal" : "vertical";

        return { x, y, direction, shipLength};
    }
}