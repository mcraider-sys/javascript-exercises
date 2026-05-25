const add = function(a, b) {
  return a + b;	
};


const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  const first = 0;
  return arr.reduce((accum, current) => accum + current, first);
  
};


const multiply = function(arr) {
  return arr.reduce((accum, current) => accum * current);
};



const power = function(a,b) {
  return Math.pow(a,b);	
};


const factorial = function(a) {
  let initVal = 1;
  for(let i = 1; i <= a; i++){
    initVal *= i;
  }	
  return initVal;
};

console.log(factorial(7));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
