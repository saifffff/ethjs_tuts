const {ethers, JsonRpcProvider} = require("ethers")
// The ethers library is a JavaScript library for interacting with the Ethereum blockchain. It provides a variety of classes and functions for developers to use, such as classes for connecting to Ethereum nodes, sending transactions, and interacting with smart contracts.
const provider = new JsonRpcProvider(
    `https://mainnet.infura.io/v3/3c7eac9b2dd149b8ab3abf0ae6cc321b`
);
// JsonRpcProvider is a class in the Ethers.js library that provides a way to connect to a JSON-RPC provider. A JSON-RPC provider is a server that can be used to interact with a blockchain.


const queryBlockchain = async()=>{
    const block = await provider.getBlockNumber();
    console.log("current Block No : ",block);
}

queryBlockchain();

