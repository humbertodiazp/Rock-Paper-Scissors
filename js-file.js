const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// function logText(e) {
//   console.log(this.classList.value);
//   // e.stopPropagation(); // stop bubbling!
//   // console.log(this);
// }

// divs.forEach(div => div.addEventListener('click', logText, {
//   capture: false,
//   once: true
// }));

// button.addEventListener('click', () => {
//   console.log('Click!!!');
// }, {
//   once: true
// });

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });







// //generate's a random weapon choice for the computer  
// function computerPlay() {
//     const weapons = ['rock', 'paper', 'scissors'];
//         for (let i = 0; i<2; i++){
//         const random = weapons[Math.floor(Math.random() * weapons.length)];

//     return random;
//     }
// }
//     //  console.log(computerPlay());

// //prompt player to make a weapon selection 
// function playerPlay() {
//     const weapon = window.prompt("You are up agaisnt the machine in a game of rock, paper, scissors! Choose wisely and good luck!");

//     return weapon.toLocaleLowerCase();
//     }
//     //  console.log(playerPlay())

// //total var collects playRound results in an array         
// total = [];  


// function playRound (playerPlay, computerPlay){
        
//     if (playerPlay == computerPlay) {
//         alert("You tied");
//         return  "You tied!";
//     } else if (playerPlay == "paper" && computerPlay == "rock"){
//             alert("You Win!");
//         return "You Win!" && total.push(1);
//         //call the push function to add 1 to the total variable//
//     } else if (playerPlay == "scissors" && computerPlay == "paper"){
//         alert("You Win!");
//         return "You Win!" && total.push(1);
//     } else if (playerPlay == "rock" && computerPlay == "paper") {
//         alert("You Win!");
//         return "You Win!" && total.push(1);
//     } else {
//         alert("You Loose!");
//         return "You Loose!" && total.push(-1); 
//             //call the push function to subtract 1 to the total variable//

//     }
// }
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

// if (sum >= 1){
// alert ("Congrats! You beat the computer.");
// } else if (sum <= -1){
// alert ("You have been defeated by the machine!"); 
// } else {
// alert ("Not, bad! You tied with the computer.");
// }
