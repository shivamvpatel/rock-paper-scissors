let humanScore = 0;
let computerScore = 0;
const div = document.createElement("div");
const para = document.createElement("p");

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

let userChoice = "";
let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "rock":
            userChoice = target.id;
            break;
        case "paper":
            userChoice = target.id;
            break;
        case "scissors":
            userChoice = target.id;
            break;
    }
    playRound(getComputerChoice(), userChoice);
});

function playRound(computerChoice, userChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        humanScore = 0;
        computerScore = 0;
    }
    if (computerChoice === userChoice) {
        div.textContent = "It is a tie!";
        buttons.append(div);
    }
    else if (
        (userChoice === 'paper' && computerChoice === "rock") ||
        (userChoice === 'rock' && computerChoice === "scissors") ||
        (userChoice === 'scissors' && computerChoice === "paper")
    ) {
        humanScore++;
        div.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        buttons.append(div);      
    }
    else {
        computerScore++;
        div.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        buttons.append(div);
        
    }
    para.textContent = `Human Score: ${humanScore} / Computer Score: ${computerScore}`;
    div.append(para);

    if (humanScore > 4) {
        para.textContent = 'Human wins';
    } else if (computerScore > 4) {
        para.textContent = 'Computer wins';
    };
};