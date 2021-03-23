const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != 'string') return false;
  let act = +sampleActivity;
  if(act <= 0) return false;
  if (act && act < MODERN_ACTIVITY) {
  return result = Math.ceil(Math.abs(Math.log(act / MODERN_ACTIVITY ) / (0,693 / HALF_LIFE_PERIOD) * 1000));
  } else return false;
};
