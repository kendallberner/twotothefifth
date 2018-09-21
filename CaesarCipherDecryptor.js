//Caesar Cipher Decryption for cerner_2^5_2018

var encryptedText = "wlsyx syx xs kvezmxc jeppw!";
var doubleAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var plainText = "";

for(var i = 0; i < 26; i++){
	plainText = "";
	for(var j = 0; j < encryptedText.length; j++){
		var encryptedChar = encryptedText.charAt(j).toLowerCase();
		var index = doubleAlphabet.indexOf(encryptedChar);
		if(index == -1){
			plainText += encryptedChar;
		}else{
			var newIndex = index + i;
			plainText += doubleAlphabet.charAt(newIndex);
		}
	}
  console.log(plainText);
}