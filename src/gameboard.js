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

  const placeVerticalShip = function placeVerticalShip(length, column, row, shipIndex) {
    for (let i = 0; i < length; i += 1) {
      board[column][row + i] = 'ship';
      shipBoard[column][row + i] = shipIndex;
    }
  };

  const placeHorizontalShip = function placeHorizontalShip(length, column, row, shipIndex) {
    for (let i = 0; i < length; i += 1) {
      board[column + i][row] = 'ship';
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

  const isOverlapping = function isOverlapping(length, direction, column, row) {
    let overlap = false;

    if (direction === 'vertical') {
      for (let i = 0; i < length; i += 1) {
        if (board[column][row + i] === 'ship') {
          overlap = true;
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        if (board[column + i][row] === 'ship') {
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

  return { getBoard, placeShip };
};

export default Gameboard;
