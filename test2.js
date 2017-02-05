function no_dupes(inputArray){
	var arrayLen = inputArray.length;
		for(var i = 0; i<arrayLen; i++){
			for (var j = 0; j<arrayLen; j++){
				if (i == j){
					continue;
				}
				else if (inputArray[j] == inputArray[i]){
					inputArray.splice(j,1);
					arrayLen = inputArray.length;
					continue;
				}
			}
		}
	console.log(inputArray);
};
no_dupes([1,1,2,2,3,1]); // Output: [1,2,3]
no_dupes([1,1,1,1]); // Output: [1]
no_dupes([1,2,3,3,4,4,5,5]); // Output: [1,2,3,4,5]

// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.
// Don't use String's reverse method; that would be too simple.

function ReverseMe(inputString){
	strLen = inputString.length;
	var reverseString = "";
	for(var i = strLen-1; i >= 0; i--){
		reverseString += inputString[i];
	}
	console.log(reverseString);
}
ReverseMe("Ram");
//=================
// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
// As a special case, `factorial(0) == 1`.

function factorialMe (inputNum){
	var factorial = 1;
	if(inputNum == 0){
		console.log(factorial);
	}
	else{
		for (var i = inputNum; i > 0; i--){
			factorial *= i;
		}
		console.log(factorial);
	}
}
factorialMe(3);
factorialMe(5);
factorialMe(0);
factorialMe(1);
//==================
/*
# Write a method that takes in a string. Return the longest word in
# the string. You may assume that the string contains only letters and
# spaces.
# You may use the String `split` method to aid you in your quest.
*/
function longestWord(inputStr){
	var wordArray = inputStr.split(" ");
	var arrayLen = wordArray.length;
	var max = 0;
	var index = 0;
	for (var i = 0; i < arrayLen; i++){
		if(wordArray[i].length > max){
			max = wordArray[i].length;
			index = i;
		}
	}
	console.log("The longest word is " + wordArray[index]);
}
longestWord("Hello how are you");
longestWord("Welcome World");
