// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Nft {

    string name;
    string description;

    function setName(string memory _name) external {
        name = _name;
    }

    function setDescription(string memory _description) external {
        description = _description;
    }

    function getName() external view returns(string memory) {
        return name;
    }

    function getDescription() external view returns(string memory) {
        return description;
    }

}
