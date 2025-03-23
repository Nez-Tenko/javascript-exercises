const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5.0/9.0);
  celsius = celsius.toFixed(1); // this returns a string
  return +celsius; // returns a number
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9.0/5.0) + 32); 
  fahrenheit = fahrenheit.toFixed(1);
  return +fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
