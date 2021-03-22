const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let act = +sampleActivity;
  if (act) {
  return result = Math.ceil(Math.abs(Math.log(act / MODERN_ACTIVITY ) / (0,693 / HALF_LIFE_PERIOD) * 1000));
  } else return false;
};
