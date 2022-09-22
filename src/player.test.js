import Player from './player';

it("A player can attack another player's gameboard", () => {
  const resultBoard = [
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'hit', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ];
  const playerOne = Player();
  const playerTwo = Player();

  playerOne.attack(playerTwo, 3, 3);
  expect(playerTwo.getGameboard().getBoard()).toEqual(resultBoard);
});
