function not_string(inputString){

	var subString = inputString.substring(0,3);

	if (subString == "not") 
		{console.log(inputString)}
	else{ inputString = "not " + inputString;
			console.log(inputString)}
};

not_string("not a string");

not_string("hello world");

function flimflam() {
	for (var i =1; i<101; i++){

		switch (true) {
			case (i%3 == 0):
				console.log("FLIM");
				break;
			case (i%5 == 0):
				console.log("FLAM");
				break;
			case (i%15 == 0):
				console.log("FLIMFLAM");
				break;
			default:
				console.log(i);
				break;
		}
	}
}

flimflam();

function no_dupes(inputArray){

	var arrayLen = inputArray.length;

			




}
