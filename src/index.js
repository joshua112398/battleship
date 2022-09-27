import './styles/reset.css';
import './styles/normalize.css';
import './styles/style.css';
import Player from './player';
import UI from './ui';

const Game = (function Game() {
  const gameUI = UI();
  const playerOne = Player('player-one', true);
  const playerTwo = Player('player-two', false);

  playerOne.getGameboard().placeShip(3, 'vertical', 1, 1);
  playerOne.getGameboard().placeShip(3, 'vertical', 3, 4);
  playerOne.getGameboard().placeShip(2, 'horizontal', 5, 5);

  playerTwo.getGameboard().placeShip(3, 'vertical', 1, 1);
  playerTwo.getGameboard().placeShip(3, 'vertical', 3, 4);
  playerTwo.getGameboard().placeShip(2, 'horizontal', 5, 5);

  const checkWinner = function checkWinner() {
    console.log('Checking for winner...');
    if (playerOne.getGameboard().areAllShipsSunk() === true) {
      console.log('Player 2 wins');
      gameUI.showWinner('You lost...');
    } else if (playerTwo.getGameboard().areAllShipsSunk() === true) {
      console.log('Player 1 wins');
      gameUI.showWinner('You won!');
    }
  };

  gameUI.loadBoard(playerOne, playerTwo, false, checkWinner);
  gameUI.loadBoard(playerTwo, playerOne, true, checkWinner);
}());

export default Game;
