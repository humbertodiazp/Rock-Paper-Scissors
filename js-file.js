let computerScore = 0;
let playerScore = 0;

const rockButton = document.getElementById('ROCK')
const paperButton = document.getElementById('PAPER')
const scissorsButton = document.getElementById('SCISSORS')
const resultPrompt = document.querySelector('#result-prompt');

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound (playerSelection, computerSelection ){
    computerSelection = computerSelection.toUpperCase()
    if (playerSelection == computerSelection) 
     {
        resultPrompt.textContent = 'Hey you tied. Try again!'; 

    } else if (
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
        (playerSelection == "ROCK" && computerSelection == "PAPER")
     ) {
        playerScore = ++playerScore;
        keepPlayerScore();
        resultPrompt.textContent = 'Hey  you WIN!' ;
        
     } 
     else {
        computerScore = ++computerScore;
        keepCompScore()
        resultPrompt.textContent = 'Hey  you LOST!' ;
    }
    if (playerScore == 5) {
       resultPrompt.textContent = 'Hey  you DID IT! You beat the computer!' ;
       button.style.visibility = 'visible';
    } else if (computerScore == 5){
        resultPrompt.textContent = 'The computer WON! this battle. But the war rages.';
        button.style.visibility = 'visible';
    }
    console.log(playRound)
}

// clicking rock
rockButton.addEventListener('click', () => {
    playerSelection = 'ROCK';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

// clicking paper
paperButton.addEventListener('click', () => {
    playerSelection = 'PAPER';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

// clicking scissors
scissorsButton.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

// clicking button
const button = document.querySelector('.again');
button.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultPrompt.textContent = "";
    button.style.visibility = 'hidden';
})

function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = playerScore;
  }
  function keepCompScore() {
    let compScoreBox = document.querySelector("#computer-score");
    compScoreBox.textContent = computerScore;
  }


  