const {ethers,JsonRpcProvider} = require("ethers"); // importing ethers and rpcProvider
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/3c7eac9b2dd149b8ab3abf0ae6cc321b`); // integrating infura

const getBal =async()=>{
    const bal = await provider.getBalance(`0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5`);
    const val = ethers.formatEther(bal); // in bal we have ethers in terms of wei
    console.log("balance : ",val); // in val we have ethers in terms of eth

}

getBal();