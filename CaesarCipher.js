//Caesar Cipher for cerner_2^5_2018

var plaintext = "Very Secret Message!";
var shift = 4;
var doubleAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var caesarCipherText = "";

for(var i = 0; i < plaintext.length; i++){
	var plainChar = plaintext.charAt(i).toLowerCase();
    var index = doubleAlphabet.indexOf(plainChar);
    if(index == -1){
  	    caesarCipherText += plainChar;
    }else{
  	    var newIndex = index + shift;
		caesarCipherText += doubleAlphabet.charAt(newIndex);
    }
}

console.log(caesarCipherText);