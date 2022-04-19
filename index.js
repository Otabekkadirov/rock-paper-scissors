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

let computerSelection = computerPlay();
