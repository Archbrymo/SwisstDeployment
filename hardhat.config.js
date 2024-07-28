require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
<<<<<<< HEAD
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [""],
    },
  },
};
=======
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["0x3..."], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
>>>>>>> 3023c16ea124a2238640d6e60befd1ab194e9f1a
