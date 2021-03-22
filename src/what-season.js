const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(springDate) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (springDate.getMonth() >= 0 && springDate.getMonth() <= 1 || springDate.getMonth() == 11 ) {
    return 'winter';
  } if (springDate.getMonth() >= 2 && springDate.getMonth() <= 4) {
    return 'spring';
  } if (springDate.getMonth() >= 5 && springDate.getMonth() <= 7) {
    return 'summer';
  } if (springDate.getMonth() >= 8 && springDate.getMonth() <= 10) {
    return 'autumn';
  } else {
    return 'Unable to determine the time of year!';
  }
};
