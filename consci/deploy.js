const ethers = require('ethers');

const abi = [...];
const bytecode = [...];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const factory = new ethers.ContractFactory(abi, bytecode, signer);
const contract = await factory.deploy();
await contract.deployed();

console.log("Contract deployed to:", contract.address);

