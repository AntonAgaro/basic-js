const CustomError = require("../extensions/custom-error");
const lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function genTabulaRecta (lang) {
  square = [];
for (var i = 0; i < lang.length; i++) {
  square[i] = lang.slice(i).concat(lang.slice(0, i));
}
return square;
}

const tabulaRecta = genTabulaRecta (lang);

const start = 65;


class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error;
    
    const rdyKey = key.toUpperCase().replace(/\s/g, '');
    const rdyMessage = message.toUpperCase().trim();

    const result = [];

    const keyLength = rdyKey.length;
    const messageLength = rdyMessage.length;

    for (let i = 0, n = 0; i < messageLength; i += 1, n += 1) {
      const messageChar = rdyMessage[i];
      if (!~lang.indexOf(messageChar)) {
        result.push(messageChar);
        n--;
        continue;
      }
      const messageCharCode = messageChar.charCodeAt(0);
      const shiftedRowIndex = rdyKey.charCodeAt(n % keyLength) - start;
      const shiftedCharIndex = messageCharCode - start;

      result.push(tabulaRecta[shiftedRowIndex][shiftedCharIndex]);

    }
    if (this._reverseFlag === true) {
      return result.reverse().join('');
    }
    return result.join('');

  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw Error;
    const rdyKey = key.toUpperCase().replace(/\s/g, '');
    const rdyEncryptedMessage = encryptedMessage.toUpperCase().trim();

    const result = [];

    const keyLength = rdyKey.length;
    const messageLength = rdyEncryptedMessage.length;

    for (let i = 0, n = 0; i < messageLength; i++, n ++) {
      let encryptedMessageChar = rdyEncryptedMessage[i];

      const rowIndex = rdyKey.charCodeAt(n % keyLength) - start;

      const row = tabulaRecta[rowIndex];

      if(!~lang.indexOf(encryptedMessageChar)) {
        result.push(encryptedMessageChar);
        n--;
        continue;
      }
      const targetIndex =row.indexOf(encryptedMessageChar);
      const unshiftedRow = tabulaRecta[0];
      const trueChar = unshiftedRow[targetIndex];

      result.push(trueChar);

    }
    if (this._reverseFlag === true) {
      return result.reverse().join('');
    }
    return result.join('');


  }
}

module.exports = VigenereCipheringMachine;

