const SHA256 = require('crypto-js/sha256');

const Block = require('./block');

const genesisBlock = require('./genesisBlock');
class BlockChain {
    constructor() {
        this.chain = [genesisBlock()];
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.chain.push(newBlock);
    }
    validChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash != currentBlock.computeHash()) return false;
            if (previousBlock.hash != currentBlock.prevHash) return false;

        }
        return true;
    }
}
module.exports = BlockChain;
