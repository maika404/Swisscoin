const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SecurityToken", function () {
  let SecurityToken;
  let securityToken;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    SecurityToken = await ethers.getContractFactory("SecurityToken");
    securityToken = await SecurityToken.deploy();
    await securityToken.deployed();
  });

  it("Should deploy the contract", async function () {
    expect(securityToken.address).to.not.equal(0);
  });

  it("Should have the correct name and symbol", async function () {
    expect(await securityToken.name()).to.equal("Security token");
    expect(await securityToken.symbol()).to.equal("STX");
  });

  it("Should mint initial tokens to the deployer", async function () {
    const ownerBalance = await securityToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(100 * 10 ** 18); // 100 tokens with 18 decimal places
  });

  it("Should allow the owner to mint more tokens", async function () {
    await securityToken.connect(owner).mint(addr1.address, 50 * 10 ** 18);

    const addr1Balance = await securityToken.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(50 * 10 ** 18);
  });


});