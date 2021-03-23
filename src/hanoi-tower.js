const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let num = Math.pow(2, diskNumber) - 1;
  let speedInSec = turnsSpeed / 3600;
  let count = Math.floor(num / speedInSec);
  return {
    turns: +`${num}`,
    seconds: +`${count}`
  };
};
