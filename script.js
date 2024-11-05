
//variables
let playerScore = 0;
let computerScore = 0;

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

//generate computer choice
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

//human wins
function hasHumanWonRound(human, computer) {
  if (
    (human === "Rock" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Paper") ||
    (human === "Paper" && computer === "Rock")
  ) {
    return true;
  } else {
    return false;
  }
}

//round results
function getRoundResult(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasHumanWonRound(userOption, computerResult)) {
        playerScore += 1;
        return `Human wins! ${userOption} beats ${computerResult}`;
    } else if (userOption == computerResult) {
        return `It's a tie! Both chose ${userOption}`
    } else {
        computerScore += 1;
        return `Computer wins! ${computerResult} beats ${userOption}`; 
    }
}

//game results 
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
}

showResults("Rock");
