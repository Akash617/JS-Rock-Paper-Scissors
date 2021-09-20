function computerPlay() {
  return Math.random() * (3 - 1) + 1;
}

function playerPlay() {
  let playerNum = 0;
  let playerChoice = prompt("Please choose either rock, paper or scissors");
  playerChoice = playerChoice.toUpperCase();
  if (playerChoice == "ROCK") {
    playerNum = 1;
  } else if (playerChoice == "PAPER") {
    playerNum = 2;
  } else if (playerChoice == "SCISSORS") {
    playerNum = 3;
  }

  return checkWinner(playerNum);
}

function checkWinner(playerNum) {
  let computerNum = computerPlay;
  let result = computerNum-playerNum

  if (result == 0) {
    return 0;
  } else if (result == -2 || result == 1) {
    return 1;
  } else {
    return 2;
  }
}

let result = playerPlay();

if (result == 0) {
  console.log("It's a tie!");
} else if (result == 1) {
  console.log("You lost!");
} else {
  console.log("You won!");
}
