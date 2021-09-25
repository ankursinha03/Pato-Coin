const BlockChain = require('./res/blockChain');
const Block = require('./res/block');

let patoCoin = new BlockChain();
patoCoin.addBlock(new Block(1, "26-09-2021/12:30AM", { wallet: 15 }));
patoCoin.addBlock(new Block(2, "26-09-2021/12:30AM", { wallet: 15 }));
patoCoin.addBlock(new Block(3, "26-09-2021/12:30AM", { wallet: 15 }));


console.log(patoCoin);
console.log(patoCoin.validChain())
patoCoin.chain[2].data = { wallet: 50 };
console.log(patoCoin.validChain())