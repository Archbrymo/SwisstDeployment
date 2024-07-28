const hre = require("hardhat");

async function main() {
<<<<<<< HEAD
  const contract = await hre.ethers.deployContract("TestToken");

  await contract.waitForDeployment();

  console.log(`Contract address : ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
=======
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
>>>>>>> 3023c16ea124a2238640d6e60befd1ab194e9f1a
