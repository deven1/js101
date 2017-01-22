function no_dupes(inputArray){

	var arrayLen = inputArray.length;

		for(var i = 0; i<arrayLen; i++){

			for (var j = 0; j<arrayLen; j++){

				if (i == j){
					break;
				}
				else if (inputArray[j] == inputArray[i]){

					inputArray.splice(j,1);
					break;
				}
			arrayLen = inputArray.length;	
			}
		}
	console.log(inputArray);

};

no_dupes([1,1,2,2,3,1]);

//no_dupes([1,1,1,1]);
