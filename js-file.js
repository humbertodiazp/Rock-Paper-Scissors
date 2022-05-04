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
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
playerScore.textContent =  individualScore();
computerScore.textContent = individualScore();

function individualScore() {
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }
    return sum;
}



function playRound (playerPlay, computerPlay){
        
    if (playerPlay == computerPlay) {
        alert("You tied");
        return  "You tied!";
    } else if (playerPlay == "paper" && computerPlay == "rock"){
        return "You Win!" && total.push(1) && playerTotal.push(1);
        //call the push function to add 1 to the total variable//
        // call push function again to add 1 to player total not just overall total 
    } else if (playerPlay == "scissors" && computerPlay == "paper"){
        return "You Win!" && total.push(1) && playerTotal.push(1);
    } else if (playerPlay == "rock" && computerPlay == "paper") {
        return "You Win!" && total.push(1) && playerTotal.push(1);
    } else {
        return "You Loose!" && total.push(-1) && computerTotal.push(1); 
            //call the push function to subtract 1 to the total variable//
            // call push function again to add 1 to computer total 

    }
}
// // 
// function game() {  
    

// //Play game 5 times
//     for (let i = 0; i < 5; i++) {
//     // Call playRound function, passing in newly returned values
//     // from the playerPlay and computerPlay functions and log to console
//     console.log(playRound(playerPlay(), computerPlay()));
// }      
// }
// game();




// sum = 0;

// // iterates through the total variable and returns the sum
// for (let i = 0; i < total.length; i++) {
// sum += total[i];
// }

// //verifies the summation of the total array 

// console.log(sum);

// // after 5 rounds results are calculated based on algorithm below 

if (sum >= 1){
alert ("Congrats! You beat the computer.");
//need to change alert to a div and transform that div to say these words maybe?
} else if (sum <= -1){
alert ("You have been defeated by the machine!"); 
} else {
alert ("Not, bad! You tied with the computer.");
}
