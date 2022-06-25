// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

abstract contract FlanLike {
    function mint(address recipient, uint256 amount)
        public
        virtual
        returns (bool);

    function setBurnOnTransferFee(uint8 fee) public virtual;

    function burn(uint256 amount) public virtual returns (bool); 
}
