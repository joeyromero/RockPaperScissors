

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
};

function checkWinner(playerChoice, computerChoice) {
    if(playerChoice == computerChoice){
        return "tie";
    }
    else if(
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "scissors")
    ){
        return "Player";
    }
    else {
        return "Computer";
    };
};

function playRound(playerChoice, computerChoice){
    const result = checkWinner(playerChoice, computerChoice);
    if(result == "tie"){
        return `Its a tie!`
    }
    else if(result == "Player"){
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else{
        return `You lose. ${computerChoice} beats ${playerChoice}`
    };
}

function game(){
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
       const playerChoice = "rock";
       const computerChoice = getComputerChoice();
       console.log(playRound(playerChoice,computerChoice));
       
    }
};

game();
