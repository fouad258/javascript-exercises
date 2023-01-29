const add = function(a,b) {
  return a + b ;
};
console.log(add(1,2));

const subtract = function(a,b) {
	return a - b ;
};
console.log(subtract(10,4));

const sum = function(arr) {
	let sum = 0 ;
  for( let i=0 ; i < arr.length ; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sum([1,3,5,7,9]));
  


const multiply = function(arr) {
    let mult = 1;
    for(let i=0; i < arr.length ; i++ ){
      mult = mult * arr[i];
    }
    return mult;
};
 console.log(multiply([2,4]));

const power = function(a,b) {
     return a ** b
};
 console.log(power(4,3));

const factorial = function(n) {
	let fact = 1;
   for(let i = 1; i <= n ; i++){
    fact = fact * i;
   }
  return fact ;
};
  console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
