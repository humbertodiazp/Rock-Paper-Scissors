const btn = document.querySelector('button');

function findId (btn)
{
    console.log(btn.id);
}


  






//generate's a random weapon choice for the computer  

function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors'];
        for (let i = 0; i<2; i++){
        const random = weapons[Math.floor(Math.random() * weapons.length)];

    return random;
    }
}
//     //  console.log(computerPlay());

//prompt player to make a weapon selection 
function playerPlay() {
    
    return findId;
    }
    //  console.log(playerPlay())

//total var collects playRound results in an array         
playerTotal = [];  
computerTotal = []
total = []
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')

sum = 0;

// iterates through the total variable and returns the sum
for (let i = 0; i < total.length; i++) {
sum += total[i];
}



playerSum = 0;
function playerScore() {
    for (let i = 0; i < total.length; i++) {
        playerSum += playerTotal[i];
    }
    return playerSum;
}
computerSum = 0;
function computerScore() {
    for (let i = 0; i < total.length; i++) {
        computerSum += computerTotal[i];
    }
    return computerSum;
}



function addScore() {

    if (playRound)
    return  playerScore, computerScore;

}


function playRound (playerPlay, computerPlay){
        
    if (playerPlay == computerPlay) {
        return  document.getElementById('results').innerHTML = 'Hey  you <strong>TIED!</strong>' 

    } else if (playerPlay == "PAPER" && computerPlay == "ROCK"){
        return document.getElementById('results').innerHTML = 'Hey  you <strong>WIN!</strong>'
         && total.push(1) && playerTotal.push(1) && playerScore;
        //call the push function to add 1 to the total variable//
        // call push function again to add 1 to player/computer total
    } else if (playerPlay == "SCISSORS" && computerPlay == "PAPER"){
        return document.getElementById('results').innerHTML = 'Hey  you <strong>WIN!</strong>'
         && total.push(1) && playerTotal.push(1) && playerScore;;
    } else if (playerPlay == "ROCK" && computerPlay == "PAPER") {
        return document.getElementById('results').innerHTML = 'Hey  you <strong>WIN!</strong>'
         && total.push(1) && playerTotal.push(1) && playerScore;
    } else {
        return document.getElementById('results').innerHTML = 'Try <strong>message 1</strong> again...'
         && total.push(-1) && computerTotal.push(1) && computerScore;
            //call the push function to subtract 1 to the total variable//
            // call push function again to add 1 to computer total 

    }
}


// 
function game() {  
    

//Play game 5 times
    for (let i = 0; i < 5; i++) {
    // Call playRound function, passing in newly returned values
    // from the playerPlay and computerPlay functions and log to console
    console.log(playRound(playerPlay(), computerPlay()));
}      
}
game();






//verifies the summation of the total array 

console.log(sum);

// after 5 rounds results are calculated based on algorithm below 

if (sum >= 1){
    document.getElementById('results').innerHTML = 'Hey  you <strong>DEFEATED THE MACHINE</strong>';
//need to change alert to a div and transform that div to say these words maybe?
} else if (sum <= -1){
    document.getElementById('results').innerHTML = 'Hey  you <strong>LOST!</strong>'; 
} else {
    document.getElementById('results').innerHTML = 'Not, bad! You tied with the computer';
}
