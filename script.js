

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
};

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower;
        }
    }
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
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
       const playerChoice = getPlayerChoice();
       const computerChoice = getComputerChoice();
       console.log(playRound(playerChoice,computerChoice));
       if(checkWinner(playerChoice, computerChoice) == "Player"){
        scorePlayer++;
       }
       else if(checkWinner(playerChoice, computerChoice) == "Computer"){
       scoreComputer++
       }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner")
    }
    else{
        console.log("We have a tie!");
    }
};

game();
