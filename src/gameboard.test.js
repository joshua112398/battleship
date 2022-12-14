import Gameboard from './gameboard';

const testBoard = Gameboard();

it('Gameboard is initialized correctly', () => {
  const resultBoard = [
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ];
  expect(testBoard.getBoard()).toEqual(resultBoard);
});

it('Can place ship of varying length/direction anywhere', () => {
  const resultBoard = [
    ['water', '0', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', '1', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', '0', '1', '2', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ];
  testBoard.placeShip(3, 'vertical', 5, 2);
  testBoard.placeShip(2, 'horizontal', 0, 1);
  expect(testBoard.getBoard()).toEqual(resultBoard);
});

it("Can't place ship that extends out of bounds", () => {
  expect(testBoard.placeShip(5, 'vertical', 0, 6)).toBe('Invalid Position');
  expect(testBoard.placeShip(5, 'horizontal', 6, 0)).toBe('Invalid Position');
});

it("Can't place a ship that will overlap with an existing ship", () => {
  expect(testBoard.placeShip(3, 'vertical', 5, 0)).toBe("Can't Overlap");
  expect(testBoard.placeShip(2, 'horizontal', 1, 1)).toBe("Can't Overlap");
});

it('A received attack hits the correct ship successfully', () => {
  testBoard.receiveAttack(1, 1);
  testBoard.receiveAttack(5, 4);
  expect(testBoard.getShips()[1].getStatus()).toEqual(['intact', 'hit']);
  expect(testBoard.getShips()[0].getStatus()).toEqual(['intact', 'intact', 'hit']);
});

it("Can't hit the same space more than once", () => {
  testBoard.receiveAttack(1, 2);
  expect(testBoard.receiveAttack(1, 2)).toBe('This space has already been hit.');
});

it('Indicates if a shot was a miss', () => {
  expect(testBoard.receiveAttack(2, 1)).toBe('Missed!');
});

it('Says when all ships on the board have been sunk', () => {
  const testBoard1 = Gameboard();
  testBoard1.placeShip(3, 'vertical', 1, 1);
  testBoard1.placeShip(2, 'horizontal', 5, 5);
  testBoard1.receiveAttack(1, 1);
  testBoard1.receiveAttack(1, 2);
  expect(testBoard1.areAllShipsSunk()).toBe(false);
  testBoard1.receiveAttack(1, 3);
  testBoard1.receiveAttack(5, 5);
  testBoard1.receiveAttack(6, 5);
  expect(testBoard1.areAllShipsSunk()).toBe(true);
});
