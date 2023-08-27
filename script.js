let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let randomComputerChoice = choices[randomNumber];
    //console.log("computer choice: " + randomChoice);
    return randomComputerChoice;
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection.toLowerCase()){
        case "rock":
            playerSelection = 1;
            break;

        case "paper":
            playerSelection = 2;
            break;

       case "scissors":
            playerSelection = 3;
            break;

        default:
            playerSelection = 100;
            break;
    }

    let computerSelectionIndex = choices.indexOf(computerSelection)+1;
    //console.log("p: " + playerSelection);
    //console.log("c: " + computerSelectionIndex);
    
    let checkWinner = computerSelectionIndex - playerSelection;
    //console.log(checkWinner);

    let winner;
    if(checkWinner == -1 || checkWinner == 2){
        winner = "+++ Player wins! +++";
        playerScore++;
    }else if(checkWinner == 1 || checkWinner == -2){
        winner = "+++ Computer wins! +++";
        computerScore++;
    }else if(checkWinner == 0){
        winner = "+++ Draw +++";
    }else{
        winner = "Invalid Choice, retry";
    }
    //console.log("playRound() running");
    return winner;
}

function game(){
    for(let i=0; i<5; i++){
        let drawFilter;          
        do{
            let playerSelection = prompt("Rock, Paper, Scissors");
            let computerSelection = getComputerChoice();
            drawFilter = playRound(playerSelection, computerSelection);

            console.log("Round " + (i+1));
            console.log("Player: " + playerSelection);
            console.log("Computer: " + computerSelection);

            console.log(playRound(playerSelection, computerSelection));
            console.log(`Scoreboard | Player: ${playerScore} Computer: ${computerScore}`);
            console.log("");
        }while (drawFilter == "+++ Draw +++" || drawFilter == "+++ Invalid Choice, retry +++") 
    }

    if(playerScore > computerScore){
        console.log("Overall Winner: Player");
    }else{
        console.log("Overall Winner: Computer");
    }

    playerScore = 0;
    computerScore = 0;
}
//console.log(playRound("rock", getComputerChoice()));
game();
//let playerSelection = "scissors";
//console.log("player choice: " + playerSelection);
//console.log(playRound(playerSelection, getComputerChoice()));