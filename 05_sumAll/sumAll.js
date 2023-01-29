const sumAll = function (a,b) {
if((a < 0 || b < 0) || (typeof a !== "number" || typeof b !== "number" ) ){
 return "ERROR" ;
}
let sum = 0;
for( let i = Math.min(a,b) ; i<= Math.max(a,b); i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll(10,"90"))




// Do not edit below this line
module.exports = sumAll;
