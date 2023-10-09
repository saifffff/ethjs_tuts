const {ethers,JsonRpcProvider,utils,BigNumber} = require('ethers');
const provider = new JsonRpcProvider(`https://sepolia.infura.io/v3/3c7eac9b2dd149b8ab3abf0ae6cc321b`); // infura sepolia testnet integration

const conAddress = "0x41e0d8031a72b9bd084a4c152cd22ba366e64965"; // this is the address of the deployed contract
// to interact with the contract we also need the contract ABI (abstract binary interface)
const abi = [
	{
		"inputs": [],
		"name": "sendEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bal",
				"type": "uint256"
			}
		],
		"name": "setBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getAddressBal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractInteraction =async()=>{
    const WalletCon = new ethers.Contract(conAddress,abi,provider);
    const walletName = await WalletCon.name();
    console.log("Currently interacting with wallet : ",walletName);
    const bal = await WalletCon.getBalance();
    console.log("balance : ",String(bal)); // String() method is used to convert bignumber to readable strings
    const getBalanceFromAddress = await WalletCon.getAddressBal(conAddress);
    console.log("current balance is contract address : ",conAddress,"\n Amount to : ",String(getBalanceFromAddress));
    const myBal = await WalletCon.getAddressBal('0xd5bf951EbF7EB95aAEf24CF0aa07758CCbaD92F6');
    console.log("Your faucet Bal : ",String(myBal));


}

contractInteraction();