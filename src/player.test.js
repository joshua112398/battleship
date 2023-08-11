import Player from './player';

it("A player can attack another player's gameboard", () => {
  const resultBoard = [
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
    ['water', 'water', 'water', 'miss', 'water', 'water', 'water', 'water', 'water', 'water'],
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

it("AI can't initiate an attack on the same spot more than once", () => {
  const resultBoard = [
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
    ['miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss', 'miss'],
  ];
  const playerOne = Player();
  const playerTwo = Player();
  console.log(playerTwo.moveset);

  for (let i = 0; i < 100; i += 1) {
    playerOne.randomAttack(playerTwo);
  }

  expect(playerTwo.getGameboard().getBoard()).toEqual(resultBoard);
});
