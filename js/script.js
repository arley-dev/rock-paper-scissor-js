function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase().trim();
    if (playerSelection == "rock" && computerSelection == "paper"){
        alert("You Lose!\nYour opponent have 1 point!");
        return 0;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        alert("You Won!\nYou have have 1 point!");
        return 1;
    }
    else if (playerSelection == "scissor" && computerSelection == "paper"){
        alert("You Won!\nYou have have 1 point!");
        return 1
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        alert("You Lose!\nYour opponent have 1 point!");
        return 0;
    }
    else if (playerSelection == "rock" && computerSelection == "scissor"){
        alert("You Won!\nYou have 1 point!");
        return 1;
    }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        alert("You Lose!\nYour opponent have 1 point!");
        return 0;
    }
    else if (playerSelection == computerSelection){
        alert("It's a tie! Let's try again...");
        return -1;
    }
    else {
        alert("Please choose the following choices!");
        return -1;
    }
}


function getComputerChoice() {
    var opponent_choice = Math.floor(Math.random() * 3) + 1;
    if (opponent_choice == 1) {
        return "rock";
    }
    else if (opponent_choice == 2) {
        return "paper";
    }
    else if (opponent_choice == 3){
        return "scissor";
    }
}


function playGame(){
    const MAX_SCORE = 5;
    var playerChoice, score_decision;
    var playerScore = 0;
    var opponentScore = 0;
    
    console.log(`Player: ${playerScore}\nOpponent: ${opponentScore}`);
    while (true){
        playerChoice = prompt(`Player: ${playerScore}\nOpponent: ${opponentScore}\n\nChoose:\n\n* Rock\n* Paper\n* Scissor`);
        score_decision = playRound(playerChoice, getComputerChoice());
        if (score_decision === -1){
            continue;
        }
        else if (score_decision){
            console.log(`Player: ${++playerScore}\nOpponent: ${opponentScore}`);
        }
        else if (!score_decision) {
            console.log(`Player: ${playerScore}\nOpponent: ${++opponentScore}`);
        }
        if (playerScore == MAX_SCORE) {
            alert("Congratiolations! You Win!");
            return;
        }
        else if (opponentScore == MAX_SCORE){
            alert("Sorry, better luck next time!");
            return;
        }
    }
}

playGame();