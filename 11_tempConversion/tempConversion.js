const convertToCelsius = function(Medida) {
  let Celsius = (Medida - 32) * 5/9;
  return Number(Celsius.toFixed(1))
};

const convertToFahrenheit = function(Medida) {
  let Fahrenheit = (Medida * 9/5) + 32;
  return Number(Fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
