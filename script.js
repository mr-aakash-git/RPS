let computerScore = 0;
let humanScore = 0;


function playRound() {

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

function getComputerChoice() {
   
let computerResult = Math.floor(Math.random() * 10)

if(computerResult <= 3) {
  return rock;
}
else if(computerResult <= 6) {
  return paper;
}
else {
  return scissors;
}
}

function getHumanChoice() {
  return prompt('Rock, Paper or Scissors ?').toLowerCase()
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

//console.log(computerChoice);
//console.log(humanChoice);


  if(computerChoice === humanChoice) {
    console.log('Draw! ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  }
  else if(computerChoice === rock && humanChoice === paper) {
  
    humanScore++ + console.log('You won! Paper beats rock. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  }
  else if(computerChoice === rock && humanChoice === scissors) {
    computerScore++ + console.log('You lose! Rock beats scissors. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  
  }
  else if(computerChoice === paper && humanChoice === rock) {
    computerScore++ + console.log('You lose! Paper beats rock. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  
  }
  else if(computerChoice === paper && humanChoice === scissors) {
    humanScore++ + console.log('You won! Scissors beats paper. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  
  }
  else if(computerChoice === scissors && humanChoice === rock) {
    humanScore++ + console.log('You won! Rock beats scissors. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  
  }
  else {
    computerScore++ + console.log('You lose! Scissors beats paper. ' + 'Score: ' + 'Computer- ' + computerScore + ' V/S ' + 'You- ' + humanScore);
  
  }

  //console.log(computerScore);
  //console.log(humanScore);
}

  function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore > computerScore) {
      console.log('Game Over. You won!');
    } else if(computerScore > humanScore) {
      console.log('Game Over. You lost!');
    } else {
      console.log("It's a Draw!");
    }
  }