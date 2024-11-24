export class renderBoard {
    
    static board(gameboard, container) {
        container.innerHTML = ''; // Clear the board
        for (let row of gameboard) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
        
            row.forEach((cell) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('cell');
                if (cell === 'hit') cellDiv.classList.add('hit');
                if (cell === 'miss') cellDiv.classList.add('miss');
                rowDiv.appendChild(cellDiv);
            });
            container.appendChild(rowDiv);
        }
    }

    static ships(coord, container) {      
        coord.forEach((item, i) => {
            const [x, y] = coord[i];

            // container.children[x].children[y].style.background = "rgba(80, 70, 70, 0.6)";
            container.children[x].children[y].id = "ship"
        })      
    }
};

