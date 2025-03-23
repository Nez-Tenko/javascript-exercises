const repeatString = function(inputStr, numToRepeat) {
  let myString = "";
  
  if(numToRepeat <0) {
    return 'ERROR';  
  }
  for(let i=0; i<numToRepeat; i++) {
    myString += inputStr;
  }
  return myString;
};

// Do not edit below this line
module.exports = repeatString;
