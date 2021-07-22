
// return a string declaring the winner
// repeat 5 times

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
      let computerselection = computerPlay[random]; 
      //call the compare function
      compare(this.textContent,computerselection);
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
    const compare = (playerSelection,computerselection) => {   
      const winner = document.querySelector('.winner');
      if (playerSelection === computerselection) {
        winner.textContent = 'It is a tie';
        return; 
      }
        else if (playerSelection == 'rock' & computerselection == 'paper' || 
        playerSelection == 'scissors' & computerselection == 'rock' || 
        playerSelection == 'paper' & computerselection == 'scissors')
      { 
        computerScore++;
        winner.textContent = 'Computer wins';
        updateScore();
        return;
      } 
        else if (playerSelection == 'paper' & computerselection == 'rock' || 
        playerSelection == 'rock' & computerselection == 'scissors' || 
        playerSelection == 'scissors' & computerselection == 'paper')
      { 
        playerScore++;
        winner.textContent = 'Player wins';
        updateScore();
        return;
      } else if (playerScore === 5) {
        winner.textContent = 'Player won the game';
      } else if (computerScore === 5) {
        winner.textContent = 'Computer won the game';
      }
    }
  }
    while(playerScore < 5 || computerScore < 5) {
      game();
    } 
}

match();