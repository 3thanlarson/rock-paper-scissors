function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return "rock" }
    else if (randomNumber < .66 && randomNumber >=.33) {
        return "paper" }
    else {
        return "scissors"};
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Ready?");

    let winner = "undefined";
    let loser = "undefined";
    let status = "undefined";

    console.log("Your choice: " + humanChoice + ". Computer choice: " + computerChoice + ".");

    if (humanSelection === computerSelection) {
        console.log("Tie! You both chose " + humanSelection);
    }
    else {
        if (humanSelection === "rock") {
            if (computerSelection === "paper") {
                winner = "paper"; loser = "rock";
                status = "lose";
            }
            else {
                winner = "rock"; loser = "scissors";
                status = "win";
            }
        }
        else if (humanSelection === "paper") {
            if (computerSelection === "rock") {
                winner = "paper"; loser = "rock";
                status = "win";
            }
            else {
                winner = "scissors"; loser = "paper";
                status = "lose";
            }
        }
        else {
            if (computerSelection === "rock") {
                winner = "rock"; loser = "scissors";
                status = "lose";
            }
            else {
                winner = "scissors"; loser = "paper";
                status = "win";
            }
        }
        console.log("You " + status + "! " + winner + " beats " + loser + ".");
    }
    if (status === "win") {humanScore++} else {computerScore++};
    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);