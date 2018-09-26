//Multiplication tables for cerner_2^5_2018
var totalCorrect = 0;
var questionNumber = 1;
var totalQuestions = 10;
var startTime = Date.now();

do{
    var factor1 = Math.ceil(Math.random() * 12);
    var factor2 = Math.ceil(Math.random() * 12);
    var playerAnswer = prompt("What is " + factor1 + " * " + factor2 + "?");
    
    if(playerAnswer == (factor1 * factor2)){
        totalCorrect++;
    }
    questionNumber++;
}while(questionNumber <= totalQuestions);

var endTime = Date.now();
var elapsedTime = (endTime - startTime) / 1000;

alert("You scored " + totalCorrect + " in " + elapsedTime + " seconds!");