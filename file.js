function playComputer() {
    let num = Math.floor(Math.random() * 3);
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(num)];
}

function playRound(playerSelection, computerSelection) {

    let comp = computerSelection
    let person = playerSelection;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";


    let win = function() {
        console.log( "You Win! " +  person +" beats " + comp);
        roundResult.textContent = "You Win! " +  person +" beats " + comp
        roundResult.classList = "alert alert-success"  
        roundResult.role = "alert"
        wins +=1;
        };

    let lose = function() {
        roundResult.textContent = "You Lose! " +  comp +" beats " + person
        console.log("You Lose! " +  comp +" beats " + person);
        roundResult.classList = "alert alert-danger"  
        roundResult.role = "alert"
        losses +=1;
        };

    if (comp==person) {
        roundResult.textContent = "It's a Tie"
        console.log("It's a Tie");
        roundResult.classList = "alert alert-warning"  
        roundResult.role = "alert"
        return 0;     
    }else if (person == rock) {
        if (comp == scissors) {
            return win();
        } else{
            return lose();
        }
    } else if (person == paper) {
        if (comp == rock) {
            return win();
        } else{
            return lose();
        }
    } else if  (person == scissors) {
        if (comp == paper) {
            return win();
        } else{
            return lose();
        }
    }else {
        roundResult.textContent = "Invalid Input"
        console.log("Invalid Input");
        return 0;   
    }
}

function reset(e) {
    let letter = e.key;
    if ((e.type === 'keypress') & (letter !== 'a' & letter != "A")) return
    if (document.getElementById("resetBtn")) {
        losses = 0;
        wins = 0;
        end = false;
        scores.textContent = "Player: " + wins + " | Computer: " + losses;
        bottomDiv.removeChild(resetDiv);
        bottomDiv.removeChild(displayResult);
        roundResult.textContent="Begin play!"
        roundResult.classList = "alert alert-primary"  
        roundResult.role = "alert"
    }
    
}

function play(e) {
    if (wins !== 5 & losses !== 5) {
        let playerChoice;
        if (e.type == 'click') {
            playerChoice = this.value;
        }else if (e.type == 'keypress'){
            let letter = e.key.toLowerCase();
            const key = document.querySelector(`button[data-key="${letter}"]`)
            playerChoice = key.value;
        }            
        let computerChoice = playComputer();
        playRound(playerChoice,computerChoice);
        scores.textContent = "Player: " + wins + " | Computer: " + losses;
    }
    if (!end & (wins == 5 | losses == 5)){
               
        end = true;

        if (wins > losses){
            displayResult.textContent = "YOU WIN!"              
        } else {
            displayResult.textContent = "YOU LOSE!" 
        }
        bottomDiv.appendChild(displayResult); 
        bottomDiv.appendChild(resetDiv);
        resetDiv.appendChild(resetBtn);
    }
    
}   

// Define DOM elements 
const buttons = document.querySelectorAll('button')

const br = document.createElement('br')
const resetBtn = document.createElement('button')
resetBtn.textContent = "Play Again!"
resetBtn.classList= "btn btn-info"
resetBtn.id = 'resetBtn'
resetBtn.appendChild(br)

const span = document.createElement('span')
span.textContent = "[A]"
resetBtn.appendChild(span)

// Game Logic
let wins = 0;
let losses = 0;
let end = false;

const body = document.querySelector('body')

const displayResult = document.createElement('p');

const div = document.querySelector('#topdiv')

const roundResult = document.createElement('p');

const bottomDiv = document.querySelector('#btmdiv')
const scores = document.createElement('p');
scores.textContent = "Player: " + wins + " | Computer: " + losses;
bottomDiv.appendChild(scores);

const resetDiv = document.createElement('div')

div.appendChild(roundResult)

buttons.forEach(button => {
    button.addEventListener('click', play);
});

window.addEventListener('keypress', play)
console.log(bottomDiv)
   






resetBtn.addEventListener('click', reset)
window.addEventListener('keypress', reset)

roundResult.textContent = "Begin play!"

roundResult.classList = "alert alert-primary"  
roundResult.role = "alert"