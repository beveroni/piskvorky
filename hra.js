import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle'; //Hru začíná 'o'

// Upozornění pro uživatele, když chce restatovat hru
const gameRestart = document.getElementById('restart-game');
gameRestart.addEventListener('click', function (event) {
  if (!confirm('Chcete opravdu restartovat hru?')) {
    event.preventDefault();
  }
});

// Přidání a odebrání tříd pro všechny tlačítka

const playerSwitch = (e) => {
  if (currentPlayer === 'circle') {
    e.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--circle');
    document.querySelector('#nowPlayer').classList.add('board__field--cross');
  } else if (currentPlayer === 'cross') {
    e.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document
      .querySelector('#nowPlayer')
      .classList.remove('board__field--cross');
    document.querySelector('#nowPlayer').classList.add('board__field--circle');
  }
  e.target.disabled = true;

  // Vytvoření pole
  const gameField = document.querySelectorAll('button');
  const gameFieldButtonsAll = Array.from(gameField).map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    }
    if (button.classList.contains('board__field--cross')) {
      return 'x';
    }
    return '_';
  });

  // Kontrola jestli je na tahu hráč 'x' player - fetch
  const fields = document.querySelectorAll('button');
  fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: gameFieldButtonsAll,
      player: 'x', // Hledá tah pro křížek.
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (currentPlayer === 'cross') {
        const { x, y } = data.position;
        const field = fields[x + y * 10];
        field.click();
      }
    });

  // Kontrola jestli je vyhrál x nebo o, nebo je tah nerazhodně - zkrácení fuknce findWinner

  const winner = findWinner(gameFieldButtonsAll);
  if ((winner === 'o') | (winner === 'x')) {
    setTimeout(() => {
      alert(`Vyhrál hráč s tímot symbolem ${winner}`);
      location.reload();
    }, 300);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }, 300);
  }
};

// Pomocí query selektoru vybrány všechny tlačítka herního pole, pomocí forEach na každý zavěšen posluchač událostí

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', playerSwitch);
});
