// Write a function lucky_sevens?(numbers), which takes in an array of integers
// and returns true if any three consecutive elements sum to 7
function lucky_sevens(inputArray){
  arrayLen = inputArray.length;
  for(var i=0; i<arrayLen; i++){
    if(i==arrayLen-1){
      if(inputArray[i]+inputArray[0]+inputArray[1] == 7){
        return "true";
        break;
      }
    }
    else {
      if(inputArray[i]+inputArray[i+1]+inputArray[i+2] == 7){
        return "true";
        break;
      }
    }
  }
  return "false";
}
console.log("lucky_sevens([2,1,5,1,0]) " + lucky_sevens([2,1,5,1,0])); // should return true # => 1 + 5 + 1 == 7
console.log("lucky_sevens([0,-2,1,8]) " + lucky_sevens([0,-2,1,8])); // should return true # => -2 + 1 + 8 == 7
console.log("lucky_sevens([7,7,7,7]) " + lucky_sevens([7,7,7,7])); // should return  false
console.log("lucky_sevens([3,4,3,4]) " + lucky_sevens([3,4,3,4])); // should return false
//=============================================================================================================
// Write a function oddball_sum(numbers), which takes in an array of integers
//and returns the sum of all the odd elements.
function oddball_sum(numbers){
  arrayLen = numbers.length;
  var sum = 0;
  if(arrayLen % 2 == 0){ // even number of elements
    for(var i=0; i<arrayLen-1; i+=2){
      sum += numbers[i];
    }
  }
  else{ // odd number of elements
    for(var i=0; i<arrayLen; i+=2){
      sum += numbers[i];
    }
  }
  return sum;
}
console.log("oddball_sum([1,2,3,4,5]) " + oddball_sum([1,2,3,4,5])); // should return 9 # => 1 + 3 + 5 == 9
console.log("oddball_sum([0,6,4,4]) " + oddball_sum([0,6,4,4])); // should return 4
console.log("oddball_sum([1,2,1]) " + oddball_sum([1,2,1])); // should return  2
//=============================================================================================================
// Write a function disemvowel(string), which takes in a string,
// and returns that string with all the vowels removed. Treat "y" as a consonant.
function disemvowel(inputString){
  stringLen = inputString.length;
  //console.log("Begin " + inputString + " " + stringLen);
  flag = true;
  while(flag){
    for(var i=0; i<stringLen; i++){
      if(inputString[i] == "a" || inputString[i] == "e" || inputString[i]== "i" || inputString[i]=="o" || inputString[i] == "u"){
        if (i==0){
            inputString = inputString.substring(i+1,stringLen);
            stringLen = inputString.length;
            //console.log(i + " " + inputString + " " + stringLen + " " + flag);
            if (stringLen == 0) {
              flag = false;
            }
            break;
          }
        else {
          inputString = inputString.substring(0,i)+inputString.substring(i+1,stringLen);
          stringLen = inputString.length;
          //console.log(i + " " + inputString + " " + stringLen +" " + flag);
          break;
        }
      }
      if(i+1 == stringLen){
        flag = false;
      }
    }
  }
  console.log(inputString);
}
disemvowel("foobar");  // output should == "fbr"
disemvowel("ruby"); // output should == "rby"
disemvowel("aeiou"); // output should == ""
