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
            console.log(i + " " + inputString + " " + stringLen + " " + flag);
            if (stringLen == 0) {
              flag = false;
            }
            break;
          }
        else {
          inputString = inputString.substring(0,i)+inputString.substring(i+1,stringLen);
          stringLen = inputString.length;
          console.log(i + " " + inputString + " " + stringLen +" " + flag);
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
