const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let letters = '';
  for (let i = 0; i < members.length; i++) {
    if ((typeof members[i]) == 'string') {
    letters += members[i][0];
    };
  }
  if (letters === '') {
    return false;
  } else {
  return letters.split('').sort().join('');
  }
};
