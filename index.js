const BlockChain = require("./res/blockChain");
const Block = require("./res/block");

let patoCoin = new BlockChain(4);
console.log("Mining: 1");
patoCoin.addBlock(new Block(1, new Date().toLocaleString(), { wallet: 15 }));
console.log("Minted: 1");
console.log("Mining: 2");
patoCoin.addBlock(new Block(2, new Date().toLocaleString(), { wallet: 15 }));
console.log("Minted: 2");
console.log("Mining: 3");
patoCoin.addBlock(new Block(3, new Date().toLocaleString(), { wallet: 15 }));
console.log("Minted: 3");

console.log(patoCoin);
console.log(patoCoin.validChain());
// patoCoin.chain[2].data = { wallet: 50 };
// console.log(patoCoin.validChain())
