//Vigenere Cipher for cerner_2^5_2018

var plainText = "ATTACKATDAWN";
var encryptedText = "";
var encryptionKey = "LEMON";
var doubleAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(var i = 0; i < plainText.length; i++){
    var keyChar = encryptionKey.charAt(i % 5);
    var keyIndex = doubleAlphabet.indexOf(keyChar);
    var charIndex = doubleAlphabet.indexOf(plainText.charAt(i));
    encryptedText += doubleAlphabet.charAt(keyIndex + charIndex);
}

console.log(encryptedText);