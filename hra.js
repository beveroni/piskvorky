import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
let button = '_';

const gameField = [
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
];

const playerSwitch = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    gameField[index] = 'o';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--circle');
    document.querySelector('#nowPlayer').classList.add('board__field--cross');
  } else {
    gameField[index] = 'x';
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--cross');
    document.querySelector('#nowPlayer').classList.add('board__field--circle');
  }

  event.target.disabled = true;
};

const gameRestart = document.getElementById('restart-game');
gameRestart.addEventListener('click', function (event) {
  if (!confirm('Chcete opravdu restartovat hru?')) {
    event.preventDefault();
  }
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
  button.addEventListener('click', playerSwitch);
});
