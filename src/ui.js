const renderBoard = (gameboard, container) => {
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
  };
  
  export { renderBoard };