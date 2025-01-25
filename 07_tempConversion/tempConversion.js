const convertToCelsius = function(temp) {
  let converted = (5/9)*(temp-32)
  if(!(Number.isInteger(converted)))
    return result = parseFloat(converted.toFixed(1))
  return converted
};

const convertToFahrenheit = function(temp) {
  let converted = ((9/5)*temp) + 32
  if(!(Number.isInteger(converted)))
    return result = parseFloat(converted.toFixed(1))
  return converted
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
