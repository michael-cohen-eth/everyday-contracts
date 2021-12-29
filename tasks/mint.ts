import { task, types } from "hardhat/config";
import { getContract } from "./helpers";

task("mint", "Mints from the NFT contract")
  .addParam("address", "The address to receive a token", "", types.string)
  .setAction(async function (taskArguments, hre) {
    const contract = await getContract(hre);
    const transactionResponse = await contract.mintTo(taskArguments.address, {
      gasLimit: 500_000,
    });
    console.log(`Transaction Hash: ${transactionResponse.hash}`);
  });
