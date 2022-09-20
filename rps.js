
const OPTIONS = ["ROCK", "PAPER", "SCISSORS"];
const BEATS = [OPTIONS[2], OPTIONS[0], OPTIONS[1]];

const WIN = 1;
const LOSE = -1;
const DRAW = 0;

const ROUNDS = 5;

const buttonOptions = document.querySelectorAll('.option');
buttonOptions.forEach(option => {
  option.addEventListener('click', function(e) {
    const round = playRound(e.target.innerText, getComputerChoice());
    alert(round);
  });
});

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (!OPTIONS.includes(playerSelection) || !OPTIONS.includes(computerSelection)) {
    return "Invalid Input";
  }

  const outcome = getOutcome(playerSelection, computerSelection);
  if (outcome === WIN) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
  if (outcome === LOSE) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }

  return "You Drew! You both chose " + playerSelection;
}

function getOutcome(option1, option2) {
  if (OPTIONS.indexOf(option1) === BEATS.indexOf(option2)) {
    return WIN;
  }
  if (OPTIONS.indexOf(option2) === BEATS.indexOf(option1)) {
    return LOSE;
  }
  return DRAW;
}

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}
