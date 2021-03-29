const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let resultArr = [];
  let spliceCount = 0;
  for (let j = 0; j < arr.length; j++) {
    resultArr[j] = arr[j];
  }
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == "--discard-next") {
      if (resultArr[i] == resultArr[resultArr.length - 1]) {
        resultArr.pop();
      } if (resultArr[i] == resultArr[0]) {
        resultArr.splice(i, 2);
        i--;
      } 
      else {
      resultArr.splice(i, 2);
      spliceCount++;
      }
    }
    if (resultArr[i] == "--discard-prev") {
      if (spliceCount > 0) continue;
      if (resultArr[i] == resultArr[0]) {
        resultArr.shift();
      } else {
      resultArr.splice(i-1, 2);
      spliceCount++;
      }
    }
    if (resultArr[i] == "--double-next") {
      if (resultArr[i] == resultArr[resultArr.length - 1]) {
        resultArr.pop();
      } else {
      resultArr[i] = resultArr[i + 1];
      }
    }
    if (resultArr[i] == "--double-prev") {
      // if (spliceCount > 0) continue;
      if (resultArr[i] == resultArr[0]) {
        resultArr.shift();
      } else {
      resultArr[i] = resultArr[i - 1];
      }
    }
  }
  for (let v = 0; v < resultArr.length; v++) {
    if (resultArr[v] == "--discard-next" || resultArr[v] == "--discard-prev" || resultArr[v] == "--double-next" || resultArr[v] == "--double-prev") {
      resultArr.splice(v, 1);
    }
  }
  return resultArr;
};
