let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let randomComputerChoice = choices[randomNumber];
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
    
    let checkWinner = computerSelectionIndex - playerSelection;

    let winner;
    if(checkWinner == -1 || checkWinner == 2){
        winner = "+++ Player wins! +++";
        ++playerScore;
    }else if(checkWinner == 1 || checkWinner == -2){
        winner = "+++ Computer wins! +++";
        ++computerScore;
    }else if(checkWinner == 0){
        winner = "+++ Draw +++";
    }else{
        winner = "Invalid Choice, retry";
    }
    return winner;
}

function game(){
    let roundCounter = 0;
    let maxScore = 5;

    while(playerScore < maxScore || computerScore < maxScore){
        let playerSelection = prompt("Rock, Paper, Scissors");
        let computerSelection = getComputerChoice();

        console.log("Round " + (roundCounter+1));
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Scoreboard | Player: ${playerScore} Computer: ${computerScore}`);
        console.log("");

        ++roundCounter;
    }


    if(playerScore > computerScore){
        console.log("Overall Winner: Player");
    }else{
        console.log("Overall Winner: Computer");
    }

    playerScore = 0;
    computerScore = 0;     

    
}

   

    


game();
