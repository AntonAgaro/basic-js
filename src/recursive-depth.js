const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (arr.some(item => Array.isArray(item))) {
      const newArr = arr.reduce((prev, cur) => prev.concat(cur), []);
      return count + this.calculateDepth(newArr);
    }
    return count;
  }
};
