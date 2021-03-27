const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.testInt(position)) {
    if (position < 1 || position > this.getLength()) {
      this.deleteChain();
      throw new Error('Error!');
    }
    const delIndex = position - 1;
    this.result.splice(delIndex, 1);
    return this;
  }
  this.deleteChain();
  throw new Error('Error!');
},
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.getChain();
    this.deleteChain();
    return resultChain;
  },
  deleteChain() {
    this.result.length = 0;
  },
  testInt(item) {
    return typeof item === 'number' && (item ^ 0) === item;
  },
  getChain() {
    return this.result.join('~~');
  }


};

module.exports = chainMaker;
