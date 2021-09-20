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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let result = buttonClicked(button.id);
  });
});

function displayResult(result) {
  let resultDisplayContainer = document.querySelector('.result_display_container');
  let resultDisplay = document.createElement('div');
  resultDisplay.classList.add('result_display');

  if (result == 0) {
    resultDisplay.textContent = "It's a tie!";
  } else if (result == 1) {
    resultDisplay.textContent = "You lost!";
  } else {
    resultDisplay.textContent = "You won!";
  }

  resultDisplayContainer.appendChild(resultDisplay);
}
