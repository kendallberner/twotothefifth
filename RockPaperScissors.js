//Rock, paper, scissors for cerner_2^5_2018

var choices = ["rock", "paper", "scissors"]
var winningMatchups = {"rock":"scissors",
                       "paper":"rock",
                       "scissors":"paper"};

var playerChoice = prompt("Rock, paper, scissors!", "rock");
var computerChoice = choices[Math.ceil(Math.random() * 3) - 1];
console.log(computerChoice);

if(playerChoice === computerChoice){
    console.log("A draw!");
}else if(winningMatchups[playerChoice] === computerChoice){
    console.log("You win!");
}else{
    console.log("You lose!");
}