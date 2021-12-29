# everyday-contracts
Trying to deploy and verify a new contract every day (on Rinkeby lol) to improve my abilities.

Every day is a new branch.

# The contract
- This first contract is a REAAALLLLYYY simple ERC721 implementation
- I wanted to keep day 1 simple to make future days easier to build on top of this one.

#### Contract Address: [0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e](https://rinkeby.etherscan.io/address/0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e)
# Commands run
```
$ npm install --save-dev hardhat
$ npm install
$ npx hardhat
$ npx hardhat compile
Compiling 13 files with 0.8.4
Generating typings for: 13 artifacts in dir: typechain for target: ethers-v5
Successfully generated 19 typings!
Compilation finished successfully
...
$ npx hardhat deploy
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Contract deployed to address: 0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e

...

$ npx hardhat verify 0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e --network rinkeby
Nothing to compile
No need to generate any newer typings.
Compiling 1 file with 0.8.4
Successfully submitted source code for contract
contracts/NFT.sol:NFT at 0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e
for verification on Etherscan. Waiting for verification result...

Successfully verified contract NFT on Etherscan.
https://rinkeby.etherscan.deth.net/address/0x4e6d5620C4ade12D52f833DB2D9c7874bAbEbd7e#code
```

