const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let b = 0;
	a.forEach(element => {
    b += element
  });
  return b
};

const multiply = function(a) {
  let b = 1;
	a.forEach(element => {
    b = element * b
  });
  return b
};

const power = function(base, exponente) {
  let b = 1;
	for (let i = 0; i < exponente; i++){
    b = base * b;
  }
  return b
};

const factorial = function(a) {
  let b = 1;
	while (a > 1) {
    b = a * b
    a--
  }
  return b;
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
