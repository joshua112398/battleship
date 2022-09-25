import Gameboard from './gameboard';

const Player = function Player(name, turn) {
  const board = Gameboard();
  const playerName = name;
  let activeTurn = turn;

  // List of spaces attacked by AI player so that AI doesn't attack the same
  // space twice
  const moveset = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      moveset.push([i, j]);
    }
  }

  const getName = function getName() {
    return playerName;
  };

  const getGameboard = function getGameboard() {
    return board;
  };

  const toggleActiveTurn = function toggleActiveTurn() {
    activeTurn = !activeTurn;
  };

  const attack = function attack(player, column, row) {
    return player.getGameboard().receiveAttack(column, row);
  };

  const randomAttack = function randomAttack(player) {
    if (moveset.length > 0) {
      const randomIndex = Math.floor(Math.random() * moveset.length);
      const randomCoord = moveset[randomIndex];
      attack(player, ...randomCoord);
      moveset.splice(randomIndex, 1);
    }
  };

  return { getGameboard, toggleActiveTurn, getName, attack, randomAttack, moveset };
};

export default Player;
