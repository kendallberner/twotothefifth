//Doing our best for cerner_2^5_2018

do{
    var array = [6,3,2,4,5,1];
    var newArray = [];
    var length = array.length
    for(var i = 0; i < length; i++){
        var randomIndex = Math.ceil(Math.random() * array.length) - 1;
        var val = array.splice(randomIndex, 1)[0];
        newArray.push(val);
    }
    var itsRight = prompt("Is this right? " + newArray, "y/n");
}while(itsRight == "n");

