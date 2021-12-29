import { task, types } from "hardhat/config";
import { getMainAccount, getContractName, getTestingAccount } from "./helpers";

task("check-balance", "Prints out the balance of your account")
  .addOptionalParam(
    "withMainAccount",
    "[Optional] Use the main deployer account",
    false,
    types.boolean
  )
  .setAction(async function (taskArguments, hre) {
    let account = getTestingAccount();
    if (taskArguments.main_account) {
      account = getMainAccount();
    }
    console.log(
      `Account balance for ${account.address}: ${await account.getBalance()}`
    );
  });

task("deploy", "Deploys the contract")
  .addOptionalParam(
    "withMainAccount",
    "[Optional] Use the main deployer account",
    false,
    types.boolean
  )
  .setAction(async function (taskArguments, hre) {
    const name = getContractName();
    let account = getTestingAccount();
    if (taskArguments.main_account) {
      account = getMainAccount();
    }
    const nftContractFactory = await hre.ethers.getContractFactory(
      name,
      account
    );
    console.log(`Deploying ${name}...`);
    const nft = await nftContractFactory.deploy();
    console.log(`Contract deployed to address: ${nft.address}`);
  });
