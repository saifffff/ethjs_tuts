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

/*  MetaMask is a browser extension that allows users to interact with 
decentralized applications (DApps) on the Ethereum blockchain. 
It is not a Node.js package, so it cannot be used directly in Node.js applications.

There are a few reasons for this:

MetaMask relies on the browser environment to provide certain features, such as signing transactions and injecting Web3.js into web pages. Node.js does not provide these features.
MetaMask stores private keys and other sensitive information in the browser's secure storage. This is to protect users from malicious websites and applications. Node.js does not provide a secure storage mechanism for this type of data.
MetaMask is designed to be easy to use for users of all skill levels. Node.js is a more complex platform, and using MetaMask with Node.js would require developers to have a good understanding of both technologies.
*/


// alternatively we will use reactjs to access the metamask injected window object. 