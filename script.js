console.log(hasHumanWonRound("Rock", "Scissors"));
console.log(hasHumanWonRound("Scissors", "Rock"));

//variables
let playerScore = 0;
let computerScore = 0;

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
    } 
}
