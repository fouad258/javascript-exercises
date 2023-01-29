const palindromes = function (str) {
  let original_string = str.match(/[a-zA-Z0-9]/g).join('').toLowerCase();
  let reverse_string = original_string.split("").reverse().join('');
   if (original_string === reverse_string){
     return true;
   } else{
     return false;
   }
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
