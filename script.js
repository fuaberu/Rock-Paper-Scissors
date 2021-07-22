const match = () => {
  //player score
  let playerScore = 0;
  let computerScore = 0;

  const game = () =>{
    // player input stored as playerSelection.
    let playerSelection = document.querySelectorAll('.options button');
    console.log(playerSelection);
    playerSelection.forEach(Option => {
      Option.addEventListener('click', function (){
      // make the computer choose randomly rock,paper or scissors
      const computerPlay = ['rock','paper','scissors'];
      let random = Math.floor(Math.random() * computerPlay.length);
      let computerSelection = computerPlay[random]; 
      //call the compare function
      compare(this.textContent,computerSelection);
      });
    });    
    //updating the score
    const updateScore = () => {
      let pScore = document.querySelector('.player-score p');
      let cScore = document.querySelector('.computer-score p');
      pScore.textContent = playerScore;
      cScore.textContent = computerScore;
    }
    
    // compare the answers of the computer and the player to dicide who  wins the round
    const compare = (playerSelection,computerSelection) => {   
      const winner = document.querySelector('.winner');
      let playerImage = document.querySelector('.player-choice p');
      let computerImage = document.querySelector('.computer-choice p');

      if (playerScore === 5) {
        winner.textContent = 'Player won the game';
        return; 
    } else  if (computerScore === 5) {
        winner.textContent = 'Computer won the game';
        return; 
    }
      if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
          winner.textContent = 'It is a tie';  
          computerImage.textContent = computerSelection;
          playerImage.textContent = playerSelection;
          return; 
        } 
        //check if its rock
        if (playerSelection === 'rock') { 
          computerImage.textContent = computerSelection;
          playerImage.textContent = playerSelection;
          if (computerSelection === 'scissors') {
            playerScore++;
            winner.textContent = 'Player wins';
            updateScore();
            return;
          } else {
            computerScore++;
            winner.textContent = 'Computer wins';
            updateScore();
            return;
          }
        }
        //check if it paper 
        if (playerSelection === 'paper') { 
          computerImage.textContent = computerSelection;
          playerImage.textContent = playerSelection;
          if (computerSelection === 'rock') {
            playerScore++;
            winner.textContent = 'Player wins';
            updateScore();
            return;
          } else {
            computerScore++;
            winner.textContent = 'Computer wins';
            updateScore();
            return;
          }
        }
        //check if its scissors
        if (playerSelection === 'scissors') { 
          computerImage.textContent = computerSelection;
          playerImage.textContent = playerSelection;
          if (computerSelection === 'paper') {
            playerScore++;
            winner.textContent = 'Player wins';
            updateScore();
            return;
          } else {
            computerScore++;
            winner.textContent = 'Computer wins';
            updateScore();
            return;
          }
        }
      }       
    }
  }
  game ();   
}
match();