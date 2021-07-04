// determine the function computerPlay with an array (rock,paper,scissors)
    const computerPlay = ['rock','paper','scissors'];
// make the computer choose randomly betwen 0 and 2
    let random = Math.floor(Math.random() * computerPlay.length);
// use the selection to choose one of the array options being the variable computerSlection
    let computerselection = computerPlay[random];
// ask for the player input stored as playerSelection. (should be case-insensitive)
    let playerInput = prompt('What do you choose? Rock, Paper or Scissors?','')
    let playerSelection = playerInput.toLowerCase()

// compare the answers of the computer and the player to dicide who  wins the round
    if (playerSelection === computerselection) 
  {
    alert('its a tie'); 
  }
    else if (playerSelection == 'rock' & computerselection == 'paper' || 
    playerSelection == 'scissors' & computerselection == 'rock' || 
    playerSelection == 'paper' & computerselection == 'scissors')
  { 
    alert('you lost')
  } 
    else if (playerSelection == 'paper' & computerselection == 'rock' || 
    playerSelection == 'rock' & computerselection == 'scissors' || 
    playerSelection == 'scissors' & computerselection == 'paper')
  { 
    alert('you won')
  }
    else if (playerSelection !== 'paper' || 
    playerSelection !== 'rock' || 
    playerSelection !== 'scissors')
  {
    alert ('this is a non valid answer.')
  }
// return a string declaring the winner

console.log()