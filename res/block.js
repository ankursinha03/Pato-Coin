const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timeStamp, data, prevHash = "") {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return SHA256(
      this.index +
        this.timeStamp +
        JSON.stringify(this.data) +
        this.prevHash +
        this.nonce
    ).toString();
  }
  mineBlock(diff) {
    while (this.hash.substring(0, diff) !== Array(diff + 1).join("0")) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

module.exports = Block;
