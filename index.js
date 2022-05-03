// Make a simple function that returns rock or paper or scissors in a random order.
function computerPlay() {
  // Tell the computer to choose between rock, paper and scissors
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
  }

  // Then we check every case when the user wins
  if (playerSelection === "rock" && computerSelection === "scissors") {
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

const buttons = document.querySelectorAll(".btn");
const resultDiv = document.querySelector(".result");
const user = document.querySelector("#user>span");
const computer = document.querySelector("#computer>span");

let userScore = 0;
let computerScore = 0;

const game = (event) => {
  console.log(event.target.textContent);
  const computerSelection = computerPlay();
  const playerSelection = humanPlay(event.target.textContent);
  const result = playRound(playerSelection, computerSelection);

  if (result === "user won") {
    userScore++;
    user.innerHTML = userScore;
  } else if (result === "computer won") {
    computerScore++;
    computer.innerHTML = computerScore;
  }
  if (userScore === 5) {
    resultDiv.innerHTML =
      "Game over. User won. Refresh the page to play again.";
  } else if (computerScore === 5) {
    resultDiv.innerHTML =
      "Game over. Computer won. Refresh the page to play again.";
  } else {
    resultDiv.innerHTML = result;
  }
};

buttons.forEach((button) => {
  if (userScore < 5) {
    button.addEventListener("click", game);
  } else if (computerScore < 5) {
    button.addEventListener("click", game);
  } else {
    button.removeEventListener("click", game);
  }
});
