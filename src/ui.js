const UI = function UI() {
  const loadBoard = function loadBoard(player, opponent, clickable, checkWinner) {
    const gameBoard = player.getGameboard().getBoard();
    const boardDOM = document.querySelector(`#${player.getName()}>.board`);
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const trHeader = document.createElement('tr');
    for (let i = 0; i < 11; i += 1) {
      const th = document.createElement('th');
      if (i !== 0) {
        th.textContent = i;
      }
      trHeader.appendChild(th);
    }
    thead.appendChild(trHeader);

    for (let j = 0; j < 10; j += 1) {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = `${j + 1}`;
      tr.appendChild(th);
      for (let k = 0; k < 10; k += 1) {
        const td = document.createElement('td');
        if (gameBoard[k][j] === 'hit') {
          td.classList.add('hit');
        } else if (gameBoard[k][j] === 'miss') {
          td.classList.add('miss');
        }
        if (clickable === true && gameBoard[k][j] !== 'hit' && gameBoard[k][j] !== 'miss') {
          td.classList.add('clickable');
          td.addEventListener('click', () => {
            // eslint-disable-next-line no-use-before-define
            attackReload(player, opponent, k, j, clickable, checkWinner);
          });
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    boardDOM.appendChild(table);
  };

  const reloadBoard = function reloadBoard(player, opponent, clickable, checkWinner) {
    const boardDOM = document.querySelector(`#${player.getName()}>.board`);
    boardDOM.removeChild(boardDOM.firstElementChild);
    loadBoard(player, opponent, clickable, checkWinner);
  };

  const attackReload = function attackReload(player, opponent, col, row, clickable, checkWinner) {
    opponent.attack(player, col, row);
    checkWinner();
    player.randomAttack(opponent);
    checkWinner();
    reloadBoard(player, opponent, clickable, checkWinner);
    reloadBoard(opponent, player, !clickable, checkWinner);
  };

  return { loadBoard };
};

export default UI;
