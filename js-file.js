
const rockButton = document.getElementById('ROCK')
const paperButton = document.getElementById('PAPER')
const scissorsButton = document.getElementById('SCISSORS')
const humanScore = document.querySelector('.yourPoints.yourScore');
const compScore = document.querySelector('#computer-score');
const resultPrompt = document.querySelector('.result-prompt');


function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors'];
        for (let i = 0; i<2; i++){
        const random = weapons[Math.floor(Math.random() * weapons.length)];

    return random;
    }
}


function playRound (){
        
    if (playerSelection == computerSelection) {
        resultPrompt = 'Hey  you <strong>TIED!</strong>' 

    } else if (
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
        (playerSelection == "ROCK" && computerSelection == "PAPER")
     ) {
        resultPrompt = 'Hey  you <strong>TIED!</strong>' ;
     } 
     else {
        resultPrompt = 'Hey  you <strong>TIED!</strong>' ;
    }

}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const click = button.querySelector("id");
      playerSelection = click.alt.toLowerCase();
  
      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

  const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

  