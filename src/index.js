import './styles/reset.css';
import './styles/normalize.css';
import './styles/style.css';
import Player from './player';
import UI from './ui';

const Game = (function Game() {
  const gameUI = UI();
  const playerOne = Player('player-one');
  const playerTwo = Player('player-two');

  playerOne.getGameboard().placeShip(3, 'vertical', 1, 1);
  playerOne.getGameboard().placeShip(3, 'vertical', 3, 4);
  playerOne.getGameboard().placeShip(2, 'horizontal', 5, 5);
  playerOne.getGameboard().placeShip(2, 'vertical', 8, 0);
  playerOne.getGameboard().placeShip(2, 'horizontal', 7, 7);

  playerTwo.getGameboard().placeShip(3, 'vertical', 1, 1);
  playerTwo.getGameboard().placeShip(3, 'vertical', 3, 4);
  playerTwo.getGameboard().placeShip(2, 'horizontal', 5, 5);
  playerTwo.getGameboard().placeShip(2, 'vertical', 8, 0);
  playerTwo.getGameboard().placeShip(2, 'horizontal', 7, 7);

  gameUI.loadBoard(playerOne, playerTwo, false);
  gameUI.loadBoard(playerTwo, playerOne, true);
}());
