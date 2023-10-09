import './App.css';
import{useEffect} from 'react';
const{ethers} = require('ethers');


function App() {
const conAddress = "0x41e0d8031a72b9bd084a4c152cd22ba366e64965"; // this is the address of the deployed contract
// to interact with the contract we also need the contract ABI (abstract binary interface)


  useEffect(()=>{ // using use effect we will envoke the code inside this function after render() is called
		const writeContract = async()=>{
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
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			await provider.send("eth_requestAccounts",[]); // passing empty array in the end ensures the code gets run only once
			const signer = provider.getSigner();
			const contract = new ethers.Contract(conAddress,abi,signer); // creates contract object : requires(contractAddress,contractABI,signer/provider)
			// now that we have our contract object, provider and signer we can call any function in the contract that changes state( does write operations)
			await contract.setBalance(3);
			const currBal = await contract.getBalance();
			console.log("your balance is : ",String(currBal));
			}
		writeContract();
  	},[])

  return (
    <div className="App">
      <h1>Hello Saif to your react app </h1>
    </div>
  );
}

export default App;
