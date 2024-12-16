let humanScore = 0;
let computerScore = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let randomInt = getRandomInt();
    if (randomInt == 2) {
        return "rock";
    }
    else if (randomInt == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors") {
        return userChoice.toLowerCase();
    }
    else {
        getUserChoice();
    }
}

function playRound(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log("It is a tie!");
    }
    else if (
        (userChoice === 'paper' && computerChoice === "rock") ||
        (userChoice === 'rock' && computerChoice === "scissors") ||
        (userChoice === 'scissors' && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You Win! ${userChoice} beats ${computerChoice}`);
        

    }
    else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
        
    }
}

function printWinner() {
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("You tied!");
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        const computerChoice = getComputerChoice();
        const humanChoice = getUserChoice();
        playRound(computerChoice, humanChoice);
        i++;
    }
    printWinner();
}

playGame();