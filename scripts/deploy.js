const { ethers } = require("hardhat");

async function main() {
  const SecurityToken = await ethers.getContractFactory("SecurityToken");
  const securityToken = await SecurityToken.deploy();

  const tx = await securityToken.deployTransaction;
  await tx.wait(); // Ensure the transaction is mined

  console.log("SecurityToken deployed to:", securityToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });