const reverseString = function(inputStr) {
  let outputStr = "";
  for(let i=inputStr.length - 1; i>=0; i--) {
    outputStr = outputStr.concat(inputStr[i]);
  }
  return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
