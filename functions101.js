// Even Or Odd checker
var EvenOrOdd = function (inputNumber) { 
	var DivideByTwoRemainder = inputNumber%2;
	if (DivideByTwoRemainder == 0){console.log("The number is Even")}
		else {console.log("The number is Odd")}
};

EvenOrOdd(8);
// ====================================

// Greeting by Name
var greetingByName = function (name){
	console.log ("Hello " + name);
};

greetingByName ("Deven");
//  ===================================

// Return argument inside a function

var callWithin = function (name) {
	return ("Hello " +  name);
};

console.log(callWithin("Pranay"));
//  ==================================

// Another way of defining functions - without the var name

function sleepCheck (numberOfHoursSleep) {
	if (numberOfHoursSleep < 8) {
		console.log("Not enough sleep");
	}
	else{
		console.log("Good amount of sleep");
	}
};

sleepCheck(10);
sleepCheck(5);

