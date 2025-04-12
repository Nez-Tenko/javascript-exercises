const palindromes = function (str) {
  const punctuation = /'".?!\s/;
  let noPuncStr = str.replace(/['".?!,\s]/g, '');
  noPuncStr = noPuncStr.toLowerCase();
  /*for(let i=0; i<str.length/2; i++) {
    if(str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;*/

  console.log("My test: " + noPuncStr);
  for(let i=0; i<noPuncStr.length/2; i++) {
    if(noPuncStr[i] !== noPuncStr[noPuncStr.length-1-i]) {
      return false;
    }
  }
  return true;

};

// Do not edit below this line
module.exports = palindromes;
