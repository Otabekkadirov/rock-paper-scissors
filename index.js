// Let's make a simple function that returns rock or paper or scissors in a random order.
// We name this function computerPlay() that gets no parameter.

function computerPlay() {
  // We need to tell the computer to choose between rock, paper and scissors
  let weapons = ["rock", "paper", "scissors"];
  // Computer needs a random number from 1 to 3 to choose between weapons
  let random = Math.floor(Math.random() * 3);
  return weapons[random];
}

// Let's make a function that prompts the user for either rock, paper or scissors.
// We name this function humanPlay() that gets no parameter for now.
function humanPlay(userInput) {
  let cleanInput = userInput.trim().toLowerCase();
  if (
    cleanInput === "rock" ||
    cleanInput === "scissors" ||
    cleanInput === "paper" ||
    cleanInput === "bomb"
  ) {
    return cleanInput;
  } else {
    alert("Wrong weapon");
    return;
  }
}

// Let's make a function that plays a single round with userInput and computerInput.
function playRound(playerSelection, computerSelection) {
  // First we need to check when the round is tie
  if (playerSelection === computerSelection) {
    return "tie";

    // Then we check every case when the user wins
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "user won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "user won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "user won";

    // This one is a secret cheat code
  } else if (playerSelection === "bomb") {
    return "user won";
  } else {
    return "computer won";
  }
}

// Let's make a function that plays a game of 5 rounds.
function game() {
  // We need to keep the scores of human and computer.
  let humanScore = 0;
  let computerScore = 0;

  // We call playRound() function 5 times.
  for (let i = 0; i <= 5; i++) {
    // playRound() function gets 2 input, so we prompt the user for an input.
    let userWeapon = prompt("Choose your weapon: Rock, Paper or Scissors");
    let playerSelection = humanPlay(userWeapon);
    let computerSelection = computerPlay();
    // We store the result of each round to increment the scores of the players.
    let result = playRound(playerSelection, computerSelection);
    console.log("i: " + i);

    // When players win the round, we increment their score
    if (result === "user won") {
      humanScore++;
      console.log("human: " + humanScore);
    } else if (result === "computer won") {
      computerScore++;
      console.log("computer: " + computerScore);
    }
    // If the round is tie, replay the round;
    if (result === "tie") {
      i--;
      console.log("round: tie");
    }
    // Whoever scores 3 wins.
    if (humanScore === 3) {
      return `Game over. Human ${humanScore}: Computer ${computerScore} \nHuman won`;
    } else if (computerScore === 3) {
      return `Game over. Human ${humanScore}: Computer ${computerScore} \nComputer won`;
    }
  }
}

console.log(game());
