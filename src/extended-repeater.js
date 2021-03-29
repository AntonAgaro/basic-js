const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {addition = '', separator = '+', additionRepeatTimes = 1, repeatTimes = 1, additionSeparator = '|'}) {
  addStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  return str = new Array(repeatTimes).fill(`${String(str)}${addStr}`).join(separator);
};
  
