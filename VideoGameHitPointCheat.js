//Video Game Hit Points for cerner_2^5_2018
/*Lots of video games lie about how much health you have.
  One popular cheat is that your last hit point is actually worth a couple of hit points!
  This means you're much more likely to survive a hit with just one hit point remaining.
  It makes you feel like you just barely won, very exciting!*/
  
/*Of course, if you survive a hit at 1 hit point, the jig is up, so games account for that.
  I don't actually know how they do it, this is just the way I came up with.*/

var hitPoints = 100;

while(hitPoints > 0){
    var damage = prompt("How much damage do you take? You have " + hitPoints + " health remaining.", 50);
    if(hitPoints == 1){
        hitPoints = 0;
    }else{
        hitPoints -= damage
        if(hitPoints < 1 && hitPoints > -2){
            hitPoints = 1;
        }
    }
}

