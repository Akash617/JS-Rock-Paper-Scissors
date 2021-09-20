function computerPlay() {
  return Math.floor(Math.random() * (4 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}

function buttonClicked(id) {
  displayResult(checkWinner(id));
}

function checkWinner(playerNum) {
  let computerNum = computerPlay();
  let result = computerNum-playerNum

  if (result == 0) {
    return 0;
  } else if (result == -2 || result == 1) {
    return 1;
  } else {
    return 2;
  }
}

function displayResult(result) {
  let resultDisplayContainer = document.querySelector('.result_display_container');
  let resultDisplay = document.createElement('div');
  resultDisplay.classList.add('result_display');

  if (result == 0) {
    resultDisplay.textContent = "It's a tie!";
  } else if (result == 1) {
    resultDisplay.textContent = "You lost!";
    computerScore++;
  } else {
    resultDisplay.textContent = "You won!";
    playerScore++;
  }

  resultDisplayContainer.appendChild(resultDisplay);
}

function displayScore() {
  let scoreContainer = document.querySelector('.score_container');
  let scoreDisplay = document.createElement('div');
  scoreDisplay.classList.add('score_display');

  scoreDisplay.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;

  while(scoreContainer.firstChild) {
    scoreContainer.removeChild(scoreContainer.firstChild);
  }

  scoreContainer.appendChild(scoreDisplay);
}

function displayWinner() {
  let winnerContainer = document.querySelector('.winner_container');
  let winnerDisplay = document.createElement('div');
  winnerDisplay.classList.add('winner_display');

  if (playerScore ==5) {
    winnerDisplay.textContent = "You won the game!";
  } else if (computerScore == 5) {
    winnerDisplay.textContent = "The computer won the game!";
  }

  winnerContainer.appendChild(winnerDisplay);
}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let result = buttonClicked(button.id);
    displayScore();
    displayWinner();
  });
});
