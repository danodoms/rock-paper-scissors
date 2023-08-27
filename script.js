
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    //let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChoice = choices[randomNumber];
    return randomChoice;
}


function playGame(playerSelection, computerSelection){

    switch (playerSelection.toLowerCase()){
        case "rock":
            playerSelection = 1;
            break;
        
        case "paper":
            playerSelection = 2;
            break;

       case "scissors":
            playerSelection = 3;

        default:
            playerSelection = 100;
            break;
    }
    
    let checkWinner = playerSelection - choices.indexOf(computerSelection)+1;

    let winner;
    if(checkWinner == -1 || checkWinner == 2){
        winner = "Player wins!";
    }else if(checkWinner == 1 || checkWinner == -2){
        winner = "Computer wins!";
    }else{
        winner = "Draw";
    }

    return winner;
}

let playerSelection = "rock";
console.log(playGame(playerSelection, getComputerChoice));