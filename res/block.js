const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timeStamp, data, prevHash = '') {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
    }
    computeHash() {
        return SHA256(this.index + this.timeStamp + JSON.stringify(this.data) + this.prevHash).toString();
    }
}

module.exports = Block;