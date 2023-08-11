import Ship from './ship';

const Gameboard = function Gameboard() {
  const board = [];
  const shipBoard = [];
  const ships = [];
  for (let i = 0; i < 10; i += 1) {
    const column = [];
    const shipColumn = [];
    for (let j = 0; j < 10; j += 1) {
      column.push('water');
      shipColumn.push('water');
    }
    board.push(column);
    shipBoard.push(shipColumn);
  }

  const getBoard = function getBoard() {
    return board;
  };

  const getShips = function getShips() {
    return ships;
  };

  const placeVerticalShip = function placeVerticalShip(length, column, row, shipIndex) {
    for (let i = 0; i < length; i += 1) {
      board[column][row + i] = `${i}`;
      shipBoard[column][row + i] = shipIndex;
    }
  };

  const placeHorizontalShip = function placeHorizontalShip(length, column, row, shipIndex) {
    for (let i = 0; i < length; i += 1) {
      board[column + i][row] = `${i}`;
      shipBoard[column + i][row] = shipIndex;
    }
  };

  // Checks if a ship to be placed is fully inside the board
  const isWithinBounds = function isWithinBounds(length, position) {
    if (position + length - 1 <= 9) {
      return true;
    }
    return false;
  };

  // Checks if a ship to be placed is going to overlap with another ship
  const isOverlapping = function isOverlapping(length, direction, column, row) {
    let overlap = false;

    if (direction === 'vertical') {
      for (let i = 0; i < length; i += 1) {
        if (board[column][row + i] !== 'water') {
          overlap = true;
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        if (board[column + i][row] !== 'water') {
          overlap = true;
        }
      }
    }

    return overlap;
  };

  const placeShip = function placeShip(length, direction, column, row) {
    const ship = Ship(length, direction, column, row);
    const shipIndex = ships.length;
    ships.push(ship);

    // Depending on orientation of ship, checks if all or part of it will be located
    // outside the grid. If so, return an error message. Else, place the ship there.
    // It checks that the ship is within bounds first before checking for overlap.
    if (direction === 'vertical') {
      if (isWithinBounds(length, row) === false) {
        return 'Invalid Position';
      }
      if (isOverlapping(length, direction, column, row) === true) {
        return "Can't Overlap";
      }
      placeVerticalShip(length, column, row, shipIndex);
    } else {
      if (isWithinBounds(length, column) === false) {
        return 'Invalid Position';
      }
      if (isOverlapping(length, direction, column, row) === true) {
        return "Can't Overlap";
      }
      placeHorizontalShip(length, column, row, shipIndex);
    }
    return 'Valid';
  };

  const receiveAttack = function receiveAttack(column, row) {
    const shipCell = board[column][row];
    const shipIndex = shipBoard[column][row];
    // If cell is water, indicate a miss
    if (shipCell === 'water') {
      board[column][row] = 'miss';
      return 'Missed!';
    }
    // If cell was already attacked before, return warning message
    if (shipCell === 'hit' || shipCell === 'miss') {
      return 'This space has already been hit.';
    }
    // Else, indicate a hit
    ships[shipIndex].hit(shipCell);
    board[column][row] = 'hit';
    return 'Hit!';
  };

  const areAllShipsSunk = function areAllShipsSunk() {
    let allSunk = true;
    ships.forEach((ship) => {
      if (ship.isSunk() === false) {
        allSunk = false;
      }
    });
    return allSunk;
  };

  return {
    getBoard, getShips, placeShip, receiveAttack, areAllShipsSunk,
  };
};

export default Gameboard;
