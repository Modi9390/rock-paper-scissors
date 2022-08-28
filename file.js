function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3);
    if(randomNumber === 0){
        return "rock";
    }
     if(randomNumber === 1){
        return "paper";
    }
    if(randomNumber === 2){
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "the game is a tie";
    }
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "the computer won!"
        }else{
            return "you won!"
        }
    }
    if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return "the computer won!"
        }else{
            return "you won!"
        }
    }
    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "the computer won!"
        }else{
            return "you won!"
        }
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
function game() {
    //Play game 5 times
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
      // Call playRound function, passing in newly returned values
      // from the playerPlay and computerPlay functions
      const currentRound = playRound(playerSelection, computerSelection);
      // Log our result
      console.log(currentRound);
    }
 }
 