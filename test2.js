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
no_dupes([1,1,2,2,3,1]); // Output: [2,3,1]
no_dupes([1,1,1,1]); // Output: [1,1]
no_dupes([1,2,3,3,4,4,5,5]); // Output: [1,2,3,4,5]
