import Web3 from 'web3';
let web3;
if(typeof window!=="undefined"&&typeof window.ethereum!=="undefined"){
    window.ethereum.request({method:"eth_requestAccounts"});
    web3 = new Web3(window.ethereum);
}
else{
    const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/85d98318081d4d60aac5a0dc698b85ad"
    );
    web3= new Web3(provider);
}
export default web3;