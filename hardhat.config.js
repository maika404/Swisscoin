require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.18",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};