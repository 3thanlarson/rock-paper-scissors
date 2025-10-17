//---button logic---
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
    let playerChoice = "rock";
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    let playerChoice = "paper";
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    let playerChoice = "scissors";
    playRound("scissors", getComputerChoice());
});

//---define DOM points---
const roundResult = document.querySelector("#round-result");
const playerBox = document.querySelector(".player-score");
const computerBox = document.querySelector(".computer-score");

//---game logic---
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return "rock" }
    else if (randomNumber < .66 && randomNumber >=.33) {
        return "paper" }
    else {
        return "scissors"};
}

/* function getplayerChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return userInput;
}
 */

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    let winner = "undefined";
    let loser = "undefined";
    let status = "undefined";

    console.log("Your choice: " + playerChoice + " | Computer choice: " + computerChoice);

    if (playerChoice === computerChoice) {
        roundResult.textContent = "Tie! You both chose " + playerChoice + "."; 
    }
    else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                winner = "paper"; loser = "rock";
                status = "lose";
            }
            else {
                winner = "rock"; loser = "scissors";
                status = "win";
            }
        }
        else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner = "paper"; loser = "rock";
                status = "win";
            }
            else {
                winner = "scissors"; loser = "paper";
                status = "lose";
            }
        }
        else {
            if (computerChoice === "rock") {
                winner = "rock"; loser = "scissors";
                status = "lose";
            }
            else {
                winner = "scissors"; loser = "paper";
                status = "win";
            }
        }
        roundResult.textContent = "You " + status + "! " + winner + " beats " + loser + ".";
    }
    if (status === "win") {
        playerScore++;
        playerBox.textContent = "Your score: " + playerScore;
        } 
    else if (status === "lose") {
        computerScore++
        computerBox.textContent = "Computer score: " + computerScore;
    };
}

/* function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}   */