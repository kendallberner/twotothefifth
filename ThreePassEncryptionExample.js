//3 pass encryption for cerner_2^5_2018
//The idea is that neither party ever shares their encryption keys with anyone, not even each other.
//First, one party encrypts the message with their key, then gives it to the other party.
//The other party encrypts it with their own key, then gives it back
//Now the original party decrypts it using their key, and gives it back to the other party
//Finally, the receiving party decrypts the message and reads it

var plainText = "SALUTATIONS";
//The message will be encrypted by two parties, which you can think of as left and right
//If the message is encrypted, I mark a 1, if it isn't, then a 0
//So encryptedText01 is encrypted by the right party, but not the left
//encryptedText11 is encrypted by both parties
//encryptedText10 is encrypted by the left party, but not the right.
var encryptedText01 = "";
var encryptedText11 = "";
var encryptedText10 = "";
var decryptedText = "";
var encryptionKey1 = "LEMON";
var encryptionKey2 = "ORANGE";
var doubleAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

//First pass, encrypt the message with key 1
for(var i = 0; i < plainText.length; i++){
    var keyIndex = doubleAlphabet.indexOf(encryptionKey1.charAt(i % encryptionKey1.length));
    var charIndex = doubleAlphabet.indexOf(plainText.charAt(i));
    encryptedText01 += doubleAlphabet.charAt(charIndex + keyIndex);
}
console.log(encryptedText01);

//Second pass, encrypt the message with key 2
for(var i = 0; i < encryptedText01.length; i++){
    var keyIndex = doubleAlphabet.indexOf(encryptionKey2.charAt(i % encryptionKey2.length));
    var charIndex = doubleAlphabet.indexOf(encryptedText01.charAt(i));
    encryptedText11 += doubleAlphabet.charAt(charIndex + keyIndex);
}
console.log(encryptedText11);

//Third pass, decrypt the message with key 1
for(var i = 0; i < encryptedText11.length; i++){
    var keyIndex = doubleAlphabet.indexOf(encryptionKey1.charAt(i % encryptionKey1.length));
    var charIndex = doubleAlphabet.indexOf(encryptedText11.charAt(i));
    encryptedText10 += doubleAlphabet.charAt(charIndex - keyIndex + 26);
}
console.log(encryptedText10);

//Final decryption with key 2 to read the message
for(var i = 0; i < encryptedText10.length; i++){
    var keyIndex = doubleAlphabet.indexOf(encryptionKey2.charAt(i % encryptionKey2.length));
    var charIndex = doubleAlphabet.indexOf(encryptedText10.charAt(i));
    decryptedText += doubleAlphabet.charAt(charIndex - keyIndex + 26);
}
console.log(decryptedText);
