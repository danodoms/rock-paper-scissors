let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function displayScores(){

}

function displayRoundWinner(winner){

    // playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;
    // computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;
    scoreDisplay.innerHTML = `PLAYER: ${playerScore}<br>COMPUTER: ${computerScore}`;

    if(winner == 'Draw'){
        winnerDisplay.textContent = winner;   
    }else{
        winnerDisplay.textContent = `${winner} wins!`;   
    }
}

function determineOverallWinner(winner){
    if (playerScore == maxScore){
        display.textContent = `Player wins!`;
    }else if(computerScore == maxScore){
        display.textContent = `Computer wins!`;
    }
}

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
        winner = "Player";
        ++playerScore;
    }else if(checkWinner == 1 || checkWinner == -2){
        winner = "Computer";
        ++computerScore;
    }else if(checkWinner == 0){
        winner = "Draw";
    }else{
        winner = "Invalid Choice, retry";
    }


    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(winner);
    console.log("");

    displayRoundWinner(winner);
    determineOverallWinner(winner);
    return winner;
}

// function game(){
//     let roundCounter = 0;
//     let maxScore = 5;

//     while(playerScore < maxScore && computerScore < maxScore){
//         let playerSelection = prompt("Rock, Paper, Scissors");
//         let computerSelection = getComputerChoice();

//         console.log("Round " + (roundCounter+1));
//         console.log("Player: " + playerSelection);
//         console.log("Computer: " + computerSelection);

//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Scoreboard | Player: ${playerScore} Computer: ${computerScore}`);
//         console.log("");

//         ++roundCounter;
//     }


//     if(playerScore > computerScore){
//         console.log("Overall Winner: Player");
//     }else{
//         console.log("Overall Winner: Computer");
//     }

//     playerScore = 0;
//     computerScore = 0;      
// }

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const display = document.querySelector('.display');
const winnerDisplay = document.querySelector('.winner-display');
const scoreDisplay = document.querySelector('.score-display');
// const playerScoreDisplay = document.querySelector('.score-display');
// const computerScoreDisplay = playerScoreDisplay.nextElementSibling; 

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
//game();
