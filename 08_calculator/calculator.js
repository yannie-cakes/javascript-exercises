const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(a) {
  let result = 0
  if(!(a.length == 0))
	  for(let i = 0; i < a.length; i++)
      result += a[i]
  return result
};

const multiply = function(a) {
  let product = 1
  if(!(a.length == 0))
    for(let i = 0; i < a.length; i++)
      product *= a[i]
  return product
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	if(a == 0)
    return 1
  else if(a == 1)
    return 1
  else if (a == 2)
    return 2
  else
    return a*factorial(a-1)
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
