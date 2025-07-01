const convertToCelsius = function(fahrenheit) {
    converted = (fahrenheit - 32) * (5/9);
    return Number(converted.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
    converted = (celsius * (9/5)) + 32;  
    return Number(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
