const repeatString = function (string,number) {
    if (number < 0){
        return "ERROR"
    } else
    for( let i = 0 ; i= number-1 ; i++){
        repeatedString += string;
    }
    return repeatedString; 
};
let repeatedString = 'hey';
const number = Math.floor(Math.random() * 1000);
console.log(repeatString(repeatedString,number));




// Do not edit below this line
module.exports = repeatString;
