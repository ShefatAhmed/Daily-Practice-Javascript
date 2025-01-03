let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3)
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw";
};
const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You win!";
  } else {
    msg.innerText = "You lose!";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compScore) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner[userWin];
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
