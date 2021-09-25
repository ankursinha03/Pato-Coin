const Block = require('./block');
const SHA256 = require('crypto-js/sha256');


const createGenesisBlock = () => {
    return new Block(0, "26-09-2021/12.21AM", { wallet: 0 }, SHA256("").toString());
};

module.exports = createGenesisBlock;