let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    //let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChoice = choices[randomNumber];
    console.log("computer choice: " + randomChoice);
    return randomChoice;
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
        winner = "Player wins!";
    }else if(checkWinner == 1 || checkWinner == -2){
        winner = "Computer wins!";
    }else if(checkWinner == 0){
        winner = "Draw";
    }else{
        winner = "Invalid Choice, retry";
    }

    return winner;
}

let playerSelection = "scissors";
console.log("player choice: " + playerSelection);
console.log(playRound(playerSelection, getComputerChoice()));