console.log("hello world");
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice!");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLocaleLowerCase();
    computerChoice = getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "rock") {
      return console.log("tie");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      return console.log("tie");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      return console.log("tie");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      return console.log("Computer win");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      return console.log("Human win");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      return console.log("Human win");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      return console.log("Computer win");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      return console.log("Human win");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      return console.log("Computer win");
    }
  }
  console.log(humanScore, computerScore);
}
