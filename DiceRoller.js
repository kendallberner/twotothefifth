//Rolling dice for cerner_2^5_2018

var numberOfDice = 3;
var numberOfSides = 6;
var resultArr = [];
var total = 0;

for(var i = 0; i < numberOfDice; i++){
  resultArr[i] = Math.ceil(Math.random() * numberOfSides);
  total += resultArr[i];
}

console.log("Rolling " + numberOfDice + "d" + numberOfSides + "...");
console.log(resultArr);
console.log(total);