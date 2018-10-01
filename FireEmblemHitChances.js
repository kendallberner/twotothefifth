//Fire Emblem's RNG for cerner_2^5_2018
/*Fire Emblem is a video game series that involves a lot of RNG (Random Number Generation)
Whenever you attack an enemy, you have a 'hit chance', which is your percentage chance of hitting.
Except, it's a lie!
The way Fire Emblem calculates your ACTUAL hit chance is by rolling to hit TWICE, then taking the average.
This means that a hit chance above 50 is actually more accurate than it lets on.
For example, a hit chance of 80 is actually 92, and a 90 is actually 98!
Video games like to cheat to make the player have more fun!*/

var numberOfTrials = 100000;

for(var hitChance = 0.01; hitChance < 1.00; hitChance += 0.01){
    var hits = 0;
    for(var i = 0; i < numberOfTrials; i++){
        if(((Math.random() + Math.random()) / 2) < hitChance){
            hits++;
        }
    }
    var feHitChance = hits / numberOfTrials;
    console.log(formatPercentage(hitChance) + " : " + formatPercentage(feHitChance));
}

function formatPercentage(decimal){
    return (decimal * 100).toFixed(2);
}