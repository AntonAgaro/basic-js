const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let num = Math.pow(2, diskNumber) - 1;
  let speedInSec = turnsSpeed / 3600;
  let count = Math.floor(num / speedInSec);
  return {
    turns: +`${num}`,
    seconds: +`${count}`
  };
};
