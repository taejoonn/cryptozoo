// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import { Market } from "./Market.sol";

contract ZooMarket is Market, Ownable {
    constructor() Market() {

    }
}
