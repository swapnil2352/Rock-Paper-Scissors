const buttons = document.querySelectorAll('button');

const resultEl = document.querySelector("#result"); 

const userScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");
 
let playerScore = 0; 
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click',() => {
        const result = playRound(button.id, computerPlay());
        console.log(button.id); 
        console.log(computerPlay())
        resultEl.textContent = result; 
    })
})

function computerPlay(){
    const choices = ["rock", "paper", "scisssors"];
    randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";  
    }
    else if( (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
    ) { playerScore++; 
        userScoreEl.textContent = playerScore; 
        return "You win! " + playerSelection +  " beats " + computerSelection;
    }
    else { 
        computerScore++; 
        computerScoreEl.textContent = computerScore; 
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}