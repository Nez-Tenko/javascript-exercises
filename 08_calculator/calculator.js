const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let total = 0;
  for(const val of arr){
    total += val;
  }	
  return total;
};

const multiply = function(arr) {
  let product = arr.reduce((total, currentVal) => {
    return total * currentVal;
  }, 1);
  return product;
};

const power = function(base, exponent) {
  if(exponent <= 1){
    return base;
  }
  else {
    return (base*power(base,exponent-1));
  }
  
};

const factorial = function(x) {
  if(x===0){
    return 1;
  }

  let result = 1;
  while(x) {
    result *= x--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
