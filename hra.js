import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
let button = '_';

const gameRestart = document.getElementById('restart-game');
gameRestart.addEventListener('click', function (event) {
  if (!confirm('Chcete opravdu restartovat hru?')) {
    event.preventDefault();
  }
});

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

const buttons = document.querySelectorAll('button');
buttons.forEach((button, i) => {
  const playerSwitch = (e) => {
    if (currentPlayer === 'circle') {
      e.target.classList.add('board__field--circle');
      currentPlayer = 'cross';
      gameField[i] = 'o';
      document
        .querySelector('#nowPlayer')
        .classList.remove('board__field--circle');
      document.querySelector('#nowPlayer').classList.add('board__field--cross');
    } else {
      gameField[i] = 'x';
      e.target.classList.add('board__field--cross');
      currentPlayer = 'circle';
      document
        .querySelector('#nowPlayer')
        .classList.remove('board__field--cross');
      document
        .querySelector('#nowPlayer')
        .classList.add('board__field--circle');
    }

    e.target.disabled = true;

    const winner = findWinner(gameField);
    if (winner === 'o') {
      setTimeout(() => {
        alert(`Vyhrálo  ⭕`);
        location.reload();
      }, 300);
    } else if (winner === 'x') {
      setTimeout(() => {
        alert(`Vyhrál ❌`);
        location.reload();
      }, 300);
    } else if (winner === 'tie') {
      setTimeout(() => {
        alert('Hra skončila nerozhodně.');
        location.reload();
      }, 300);
    }
  };

  button.addEventListener('click', playerSwitch);
});
