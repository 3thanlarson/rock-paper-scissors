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