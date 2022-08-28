//main.js for web3 object

// const { default: Web3 } = require("web3");

// This function detects most providers injected at window.ethereum
// import detectEthereumProvider from '@metamask/detect-provider';
// const provider = await detectEthereumProvider();

var IsWeb3Injection = false;
window.ethereum.enable();

// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// const myWeb3 = new Web3(web3.currentProvider); //windows.web3 is deprecated, please use window.ethereum instead.
var myweb3 = new Web3(window.ethereum); 

// move to contract.js
// var contractaddr = "0xd1C1d89926AA464e045414F227aE9B3EDe140eb9" //sam001. Deployed Contract Address from DEPLOY & RUN TRANSACTIONS
// var msgContract;
// var msgContractAtLocal;

// if (window.ethereum) {
//     console.log("111");
//     try {
//         console.log("222");
//         // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccounts(accounts);
//     } catch (error) {
//         if (error.code === 4001) {
//             // User rejected request
//             console.log("333");
//         }
//         // setError(error);
//         console.log("444");
//     }
// }

// if (typeof window.ethereum !== 'undefined') { //web3 for web3 injection
if (typeof myweb3 !== 'undefined') { //web3 for web3 injection
    //使用web3插件 ex: metamask
    IsWeb3Injection = true;

    // move to contract.js
    // msgContract = new Web3.eth.Contract(                      //sam002. copy ABI from SOLIDITY COMPILER
    // );
    
    // msgContractAtLocal = msgContract.at(contractaddr); 
    // console.log(msgContractAtLocal);
    
    // //test
    // var interval = setInterval(function(){
    //     msgContractAtLocal.GetTestMessage(function(err,res){
    //         if(!err){
    //             console.log(res.toString());
    //         }else{
    //             console.log(err.toString());
    //         }
    //     });
    //     clearInterval(interval);
    // }, 1000); //1000ms = 1s

    // msgContractAtLocal.GetTestAddress(function(err,res){
    //     if(!err){
    //         console.log(res.toString());
    //     }
    // });   
}else{
    //沒有插件 使用localhost provider
    alert("建議使用插件");
    // const myWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // console.log(myWeb3.eth.accounts);
    // myWeb3.eth.getBalance("0x03E0c24422a68Ed544737eB652f93994D8e05f64", function(err,result){
    //     if(!err){
    //         console.log(result.toString());
    //     }else{
    //         //error
    //     }
    // });
}


/* move to raygame.js ==============================================================================================>
console.log(IsWeb3Injection);
// IsWeb3Injection = true; //for debug
if (IsWeb3Injection){
    //IsWeb3Injection == true
    //執行合約
    const myWeb3 = new Web3(window.ethereum); 

    // var walletaccountaddr = "0xBb07455Ac8df6735FA882631511e84710D570233";
    // myWeb3.eth.getBalance(walletaccountaddr, function(err,result){
    //     if(!err){
    //         console.log(result.toString());
    //     }else{
    //         //error            
    //     }
    // });

    //contract.js
    var msgContract = myWeb3.eth.contract(    //sam001. copy ABI from SOLIDITY COMPILER
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_candidate_1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidate_2",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "VoteCount_1",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "VoteCount_2",
                    "type": "uint256"
                }
            ],
            "name": "eventNewVoteResult",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_candidate_1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidate_2",
                    "type": "string"
                }
            ],
            "name": "NewVote",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Register",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_candidateNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_voteNumber",
                    "type": "uint256"
                }
            ],
            "name": "Vote",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetCandidateNames",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetIsRegistered",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetMyTickets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetTestAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetTestMessage",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetVoteList",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetVoteResult",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
    );

    var contractaddr = "0x60f12Eea5A76d36BDc892d8B8b6F60f150aE9f64" //sam002. Deployed Contract Address from DEPLOY & RUN TRANSACTIONS
    var msgContractAtLocal = msgContract.at(contractaddr); 
    // console.log(msgContractAtLocal);

    // var interval = setInterval(function(){
    //     //test
    //     msgContractAtLocal.GetTestMessage(function(err,res){
    //         if(!err){
    //             console.log(res.toString());
    //         }else{
    //             console.log(err.toString());
    //         }
    //     });
    //     clearInterval(interval);
    // }, 6000);
}else{
    //IsWeb3Injection == false
}

<================================================================================ */
