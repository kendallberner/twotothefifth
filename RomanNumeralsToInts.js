//Converting Roman Numerals to ints for cerner_2^5_2018
//Another messy one

var romanNumeral = "LXVIII";
var number = 0;

for(var i = 0; i < romanNumeral.length; i++){
		var char = romanNumeral.charAt(i);
    if(char == 'L'){
    		number += 50;
    }
    if(char == 'X'){
    		if(romanNumeral.charAt(i+1) == 'L'){
        		number -= 10;
        }else{
        		number += 10;
        }
    }else if(char == 'V'){
    		number += 5;
    }else if(char == 'I'){
    		if(romanNumeral.charAt(i+1) != 'I' && i+1 < romanNumeral.length){
        		number -= 1;
        }else{
        		number += 1;
        }
    }
}
console.log(romanNumeral + " = " + number);