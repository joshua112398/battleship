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
    ['water', 'ship', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'ship', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'ship', 'ship', 'ship', 'water', 'water', 'water', 'water', 'water'],
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
  expect(testBoard.placeShip(3, 'vertical', 5, 0)).toBe("Can't Overlap");
  expect(testBoard.placeShip(2, 'horizontal', 1, 1)).toBe("Can't Overlap");
});
