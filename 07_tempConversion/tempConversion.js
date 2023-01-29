const convertToCelsius = function(temp) {
  if(temp < -459.67){
    return "invalid temperature";
  }
  var tocelsius = ( temp-32 ) * 5/9 ;
  var roundedcelsius = Math.round(tocelsius * 10) / 10
   return roundedcelsius;
};
console.log(convertToCelsius(-100))

const convertToFahrenheit = function(temp) {
  if(temp < -273.15){
    return "invalid temperature";
  }
  var tofahrenheit = ( temp* 9/5 ) + 32 ;
  var rounded = Math.round(tofahrenheit*10) / 10;
   return rounded;
};
console.log(convertToFahrenheit(-273.15));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
