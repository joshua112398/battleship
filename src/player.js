import Gameboard from './gameboard';

const Player = function Player() {
  const board = Gameboard();

  const getGameboard = function getGameboard() {
    return board;
  };

  const attack = function attack(player, column, row) {
    player.getGameboard().receiveAttack(column, row);
  };

  return { getGameboard, attack };
};

export default Player;
