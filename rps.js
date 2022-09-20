
const OPTIONS = ["ROCK", "PAPER", "SCISSORS"];
const BEATS = [OPTIONS[2], OPTIONS[0], OPTIONS[1]];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (!OPTIONS.includes(playerSelection) || !OPTIONS.includes(computerSelection)) {
        console.log("Invalid Input");
        return false;
    }

    const outcome = getOutcome(playerSelection, computerSelection);
    if (outcome === 1) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return true;
    }
    if (outcome === -1) {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        return true;
    }

    console.log("You Drew!");
    return false;
}

function getOutcome(option1, option2) {
    if (OPTIONS.indexOf(option1) === BEATS.indexOf(option2)) {
        return 1;
    }
    if (OPTIONS.indexOf(option2) === BEATS.indexOf(option1)) {
        return -1;
    }
    return 0;
}
