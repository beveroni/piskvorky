let currentPlayer = 'circle';

const classAddCircle = (event) => {
  event.target.classList.add('board__field--circle');
  const img = document.querySelector('#nowplays');
  img.src = 'cross-green.svg';
  event.target.disabled = true;
};

const classAddCross = (event) => {
  event.target.classList.add('board__field--cross');
  const img = document.querySelector('#nowplays');
  img.src = 'circle-purple.svg';
  event.target.disabled = true;
};

const gameRestart = document.getElementById('restart-game');
gameRestart.addEventListener('click', function (event) {
  if (!alert('Chcete opravdu restartovat hru?')) {
    event.preventDefault();
  }
});
