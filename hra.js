let currentPlayer = 'circle';

const playerSwitch = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--circle');
    document.querySelector('#nowPlayer').classList.add('board__field--cross');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--cross');
    document.querySelector('#nowPlayer').classList.add('board__field--circle');
  }

  event.target.disabled = true;
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', playerSwitch);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', playerSwitch);

const gameRestart = document.getElementById('restart-game');
gameRestart.addEventListener('click', function (event) {
  if (!confirm('Chcete opravdu restartovat hru?')) {
    event.preventDefault();
  }
});
