const convertToCelsius = function(fahr) {
  //formula: (fahr - 32) * (5/9)
  const celsius = (fahr - 32) * (5 / 9);
  const rounded = Math.round(celsius * 10) / 10;
  return rounded;
};
console.log(convertToCelsius(-100));

const convertToFahrenheit = function(cels) {
  const fahr = (cels * (9/5) + 32);
  const rounded = Math.round(fahr * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
