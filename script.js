

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
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
    const result = checkWinner(playerchoice, computerChoice);
    if(result == "tie"){
        return 'Its a tie!'
    }
    else if(result == "Player"){
        return 'You win! ${playerChoice} beats ${computerChoice}!'
    }
    else{
        return 'You lose. ${computerChoice} beats ${playerChoice}'
    };
}

const playerChoice = "rock";
const computerChoice = getComputerchoice();
console.log(playRound(playerChoice, computerChoice));

