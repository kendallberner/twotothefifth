//Vigenere Cipher Decryptor for cerner_2^5_2018

var plainText = "";
var encryptedText = "LXFOPVEFRNHR";
var encryptionKey = "LEMON";
var doubleAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(var i = 0; i < encryptedText.length; i++){
    var keyChar = encryptionKey.charAt(i % 5);
    var keyIndex = doubleAlphabet.indexOf(keyChar);
    var charIndex = doubleAlphabet.indexOf(encryptedText.charAt(i));
    plainText += doubleAlphabet.charAt(charIndex - keyIndex + 26);
}

console.log(plainText);