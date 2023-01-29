const caesar= function caesarCipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charIndex = alphabet.indexOf(char.toLowerCase());

    if (charIndex === -1) {
      result += char;
      continue;
    }

    let newIndex = (charIndex + shift + alphabet.length) % alphabet.length;
    let newChar = alphabet[newIndex];
    if (char === char.toUpperCase()) {
      result += newChar.toUpperCase();
    } else {
      result += newChar;
    }
  }
  return result;
}
console.log(caesar('Hello, World!', 75));

// Do not edit below this line
module.exports = caesar;
