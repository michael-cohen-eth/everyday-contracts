# everyday-contracts
Trying to deploy and verify a new contract every day (on Rinkeby lol) to improve my abilities.

Every day is a new branch.

# The contract - Day 2
- I wanted this contract to be a simple improvement over day 1's contract:
	- This includes mint limitations (a total supply) and a mint price.
	- It also includes the [ethier](https://github.com/divergencetech/ethier) library's OpenSeaGasFreeListing override for easier listings on OpenSea.

#### Contract Address: [0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3](https://rinkeby.etherscan.io/address/0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3)
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
$ npx hardhat deploy --network rinkeby --with-main-account true
Deploying EverydaysTwo...
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
Contract deployed to address: 0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3

...

$ npx hardhat verify 0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3 --network rinkeby
Nothing to compile
No need to generate any newer typings.
Compiling 1 file with 0.8.4
Successfully submitted source code for contract
contracts/Contract.sol:EverydaysTwo at 0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3
for verification on Etherscan. Waiting for verification result...

Successfully verified contract NFT on Etherscan.
https://rinkeby.etherscan.deth.net/address/0xA339738C75bDbC7b6fb3DA37818cD6fAECd5DBf3#code
```

