
//variables
let humanScore = 0;
let computerScore = 0;

const humanScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//event listeners
rockBtn.addEventListener("click", function () {
  showResults("Stein");
})

paperBtn.addEventListener("click", function() {
  showResults("Papier");
})

scissorsBtn.addEventListener("click", function() {
  showResults("Schere");
})

resetGameBtn.addEventListener("click", resetGame);

//generate computer choice
function getRandomComputerResult() {
  const options = ["Stein", "Papier", "Schere"];
  return options[Math.floor(Math.random() * options.length)];
}

//human wins
function hasHumanWonRound(human, computer) {
  if (
    (human === "Stein" && computer === "Schere") ||
    (human === "Schere" && computer === "Papier") ||
    (human === "Papier" && computer === "Stein")
  ) {
    return true;
  } else {
    return false;
  }
}

//round results
function getRoundResults(humanOption) {
    const computerResult = getRandomComputerResult();
    if (hasHumanWonRound(humanOption, computerResult)) {
        humanScore++;
        return `Mensch gewinnt! ${humanOption} schlägt ${computerResult}`;
    } else if (humanOption == computerResult) {
        return `Gleichstand! Ihr habt beide ${humanOption} gewählt.`
    } else {
        computerScore++;
        return `Computer gewinnt! ${computerResult} schlägt ${humanOption}`; 
    }
}

//game results 
function showResults(humanOption) {
    roundResultsMsg.innerText = getRoundResults(humanOption);
    computerScoreSpanElement.innerText = computerScore;
    humanScoreSpanElement.innerText = humanScore;

    if(computerScore === 3 || humanScore === 3) {
      computerScore === 3 ? winnerMsgElement.innerText = "Computer hat die Runde gewonnen!" : winnerMsgElement.innerText = "Mensch hat die Runde gewonnen!";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
}

//reset game
function resetGame() {
humanScore = 0;
computerScore = 0;
humanScoreSpanElement.innerText = humanScore;
computerScoreSpanElement.innerText = computerScore;
resetGameBtn.style.display = "none";
optionsContainer.style.display = "block";
winnerMsgElement.innerText = "";
roundResultsMsg.innerText = "";
}

