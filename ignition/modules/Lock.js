<<<<<<< HEAD
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
=======
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

//This contract is only intended for testing purposes

contract Swisstronik {
    string private message;

    /**
     * @dev Constructor is used to set the initial message for the contract
     * @param _message the message to associate with the message variable.
     */
    constructor(string memory _message) payable{
        message = _message;
    }

    /**
     * @dev setMessage() updates the stored message in the contract
     * @param _message the new message to replace the existing one
     */
    function setMessage(string memory _message) public {
        message = _message;
    }

    /**
     * @dev getMessage() retrieves the currently stored message in the contract
     * @return The message associated with the contract
     */
    function getMessage() public view returns(string memory){
        return message;
    }
}
>>>>>>> 3023c16ea124a2238640d6e60befd1ab194e9f1a
