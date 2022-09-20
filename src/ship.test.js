import Ship from './ship';

const testShip = Ship(5, 'vertical', 3, 3);

it('Ship is initialized correctly', () => {
  expect(testShip.getStatus()).toEqual(['intact', 'intact', 'intact', 'intact', 'intact']);
});

it('Ship is hit in correct position', () => {
  testShip.hit(2);
  expect(testShip.getStatus()).toEqual(['intact', 'intact', 'hit', 'intact', 'intact']);
});

it('Ship can be sunk', () => {
  testShip.hit(1);
  testShip.hit(0);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(true);
});
