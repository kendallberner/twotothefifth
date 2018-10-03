//Zenosyne for cerner_2^5_2018
/*Ever feel like time is speeding up as you get older?
  Apparently that is called Zenosyne, and this program attempts to represent it.
  The idea is that every year feels shorter than the last, thus making up a smaller percentage of your life.
  Given a current age and an expected age of death, this program tells you how much of your life you
  FEEL like you've lived.
  I find it profoundly grim and will probably go back to making gag and video game related programs.*/

var currentAge = 22;
var ageOfDeath = 80
var total = 0;
var max = 0;

for(var i = 1; i < ageOfDeath; i++){
    if(i < currentAge){
        total += 1 / i;
    }
    max += 1 / i;
}
var percentageOfLifeLived = formatPercentage(total / max);
console.log(percentageOfLifeLived + "%");

function formatPercentage(decimal){
    return (decimal * 100).toFixed(2);
}