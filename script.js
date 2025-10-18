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

    if (playerChoice === computerChoice) {
        document.getElementById("round-result").style.color = "blue"; 
        roundResult.textContent = "Tie! You both chose " + playerChoice + "."; 
    } else {
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
        roundResult.textContent = "You " + status + "! " + String(winner).charAt(0).toUpperCase() + String(winner).slice(1) + " beats " + loser + ".";
    }
    if (status === "win") {
        playerScore++;
        playerBox.textContent = "Your score: " + playerScore;
        document.getElementById("round-result").style.color = "green"; 
        } 
    else if (status === "lose") {
        computerScore++
        computerBox.textContent = "Computer score: " + computerScore;
        document.getElementById("round-result").style.color = "red"; 
    };
    if (playerScore === 5) {
        roundResult.textContent = "You beat the computer! Choose another option to play again!"; 
        playerScore = 0;
        playerBox.textContent = "Your score: " + playerScore;
        computerScore = 0;
        computerBox.textContent = "Computer score: " + computerScore;
    };
    if (computerScore === 5) {
        roundResult.textContent = "You lost to the computer! Choose another option to try again!";
        playerScore = 0;
        playerBox.textContent = "Your score: 0";
        computerScore = 0;
        computerBox.textContent = "Computer score: 0";
    }
}

/* function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}   */