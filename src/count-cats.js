const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let arr = [].concat(...backyard);
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == '^^') count++;
  }
  return count;
};
