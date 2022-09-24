const UI = function UI() {
  const loadBoard = function loadBoard(player, opponent, clickable) {
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
        }
        if (clickable === true) {
          td.classList.add('clickable');
          td.addEventListener('click', () => {
            opponent.attack(player, k, j);
            reloadBoard(player, opponent, clickable);
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

  const reloadBoard = function reloadBoard(player, opponent, clickable) {
    const boardDOM = document.querySelector(`#${player.getName()}>.board`);
    boardDOM.removeChild(boardDOM.firstElementChild);
    loadBoard(player, opponent, clickable);
  };

  return { loadBoard };
};

export default UI;
