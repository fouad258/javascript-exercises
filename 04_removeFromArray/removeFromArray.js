const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};
console.log(removeFromArray([1, 2, 3], "1" , 3));


module.exports = removeFromArray;