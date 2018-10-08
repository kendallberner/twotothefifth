//Roman Numerals for cerner_2^5_2018
//This is such a mess don't even look at it

var number = 48;
var romanNumeral = "";

while(number > 0){
		if(number >= 40){
    		if(number < 50){
        		romanNumeral += "X";
            number += 10;
        }
        number -= 50;
        romanNumeral += "L";
    }
		if(number >= 9){
    		if(number == 9){
        		romanNumeral += "I";
            number += 1;
        }
    		number -= 10;
        romanNumeral += "X";
    }else if(number >= 4){
    		if(number == 4){
        		romanNumeral += "I";
            number += 1;
        }
        number -= 5;
        romanNumeral += "V";
    }else if(number >= 1){
        number -= 1;
        romanNumeral += "I";
    }
}

console.log(romanNumeral);