import './App.css';
import{useEffect} from 'react';
const{ethers} = require('ethers');


function App() {
const conAddress = "0x41e0d8031a72b9bd084a4c152cd22ba366e64965"; // this is the address of the deployed contract
// to interact with the contract we also need the contract ABI (abstract binary interface)


  useEffect(()=>{ // using use effect we will envoke the code inside this function after render() is called
		const writeContract = async()=>{
			const abi = [
					// {
					// 	"inputs": [],
					// 	"name": "sendEth",
					// 	"outputs": [],
					// 	"stateMutability": "payable",
					// 	"type": "function"
					// },
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
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			await provider.send("eth_requestAccounts",[]); // passing empty array in the end ensures the code gets run only once
			const signer = provider.getSigner();
			const contract = new ethers.Contract(conAddress,abi,signer); // creates contract object : requires(contractAddress,contractABI,signer/provider)
			// now that we have our contract object, provider and signer we can call any function in the contract that changes state( does write operations)
			// await contract.setBalance(3);
			// const currBal = await contract.getBalance();
			// console.log("your balance is : ",String(currBal));
			// lets transfer eth from my wallet to contract balance 
			// ethers { value: ethers.utils.parseEther('1.5') }
			await contract.sendEth(conAddress,{gasLimit: 5000000});
			}
		writeContract();
  	},[])

  return (
    <div className="App">
      <h1> Performing write operations on the Ethereum blockchain </h1>
	  <p> /*  MetaMask is a browser extension that allows users to interact with 
decentralized applications (DApps) on the Ethereum blockchain. 
It is not a Node.js package, so it cannot be used directly in Node.js applications.

There are a few reasons for this:

MetaMask relies on the browser environment to provide certain features, such as signing transactions and injecting Web3.js into web pages. Node.js does not provide these features.
MetaMask stores private keys and other sensitive information in the browser's secure storage. This is to protect users from malicious websites and applications. Node.js does not provide a secure storage mechanism for this type of data.
MetaMask is designed to be easy to use for users of all skill levels. Node.js is a more complex platform, and using MetaMask with Node.js would require developers to have a good understanding of both technologies.
*/


// alternatively we will use reactjs to access the metamask injected window object. </p>
    </div>
  );
}

export default App;
