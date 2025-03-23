const removeFromArray = function(inputArray) {
  let outputArray = inputArray;
  
  for(let i=1; i<arguments.length; i++) {
    tempArray = outputArray;
    let startIndex = 0;
    let removeIndex = 0;

    for(let j=0; j < outputArray.length; j++) {
      if(outputArray[j] === arguments[i]) {
        if(startIndex === j) { // check if first element is the one to be removed
        outputArray = outputArray.slice(startIndex + 1);
        } 
        else {
          outputArray = outputArray.slice(startIndex, j).concat(outputArray.slice(j+1));
        }
        j--;
      }
      
    }
  }  

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
