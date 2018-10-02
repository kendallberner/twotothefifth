//X-treme FizzBuzz for cerner_2^5_2018

for(var i = 1; i <= 105; i++){
    var output = "";
    
    if(i % 3 == 0){
        output += "Fizz";
    }
    if(i % 5 == 0){
        output += "Buzz";
    }
    if(i % 7 == 0){
        output += "Woz";
    }
    if(i % 11 == 0){
        output += "Wack"
    }
    if((i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0) && (i % 11 != 0)){
        output += i;
    }
    
    console.log(output);
}