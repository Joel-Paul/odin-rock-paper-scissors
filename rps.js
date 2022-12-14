
const OPTIONS = ["ROCK", "PAPER", "SCISSORS"];
const BEATS = [OPTIONS[2], OPTIONS[0], OPTIONS[1]];

const WIN = 1;
const LOSE = -1;
const DRAW = 0;

const MAX_WINS = 5;

let round = 0;
let wins = 0;
let losses = 0;

const outcomeDiv = document.querySelector('.outcome');
const roundDiv = document.querySelector('.round');
const winsDiv = document.querySelector('.wins');
const lossesDiv = document.querySelector('.losses');
const drawsDiv = document.querySelector('.draws');

const winnerDiv = document.querySelector('.winner');

const buttonOptions = document.querySelectorAll('.option');
buttonOptions.forEach(option => option.addEventListener('click', game));

function game(e) {
  const roundOutput = playRound(e.target.innerText, getComputerChoice());
  updateText(roundOutput);
  checkWinner();
}

function checkWinner() {
  if (wins < MAX_WINS && losses < MAX_WINS) return;

  buttonOptions.forEach(option => option.disabled = true);

  if (wins > losses) {
    winnerDiv.innerText = "You win!";
  } else {
    winnerDiv.innerText = "You lose!";
  }
}

function updateText(roundOutput) {
  outcomeDiv.innerText = roundOutput;
  roundDiv.innerText = "Round: " + round;
  winsDiv.innerText = "Wins: " + wins;
  lossesDiv.innerText = "Losses: " + losses;
  const draws = round - wins - losses;
  drawsDiv.innerText = "Draws: " + draws;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (!OPTIONS.includes(playerSelection) || !OPTIONS.includes(computerSelection)) {
    return "Invalid Input";
  }
  round++;

  const outcome = getOutcome(playerSelection, computerSelection);
  if (outcome === WIN) {
    wins++;
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
  if (outcome === LOSE) {
    losses++;
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
