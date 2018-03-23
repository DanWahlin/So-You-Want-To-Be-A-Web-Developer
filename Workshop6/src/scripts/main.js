//number
var weight = 210; 

//object //function //parameter
console.log(weight);

//number
var height = 72;  
console.log(height);

//string
var mood = 'happy'; 
console.log(mood);

//Goal:
//Make a "function" that takes a weight AND
//the amount to lose and calculates the result
function calcTargetWeight(weight, weightLoss) {
    var targetWeight = weight - weightLoss;
    return targetWeight;
}

var newWeight = calcTargetWeight(230, 10);
console.log(newWeight);



