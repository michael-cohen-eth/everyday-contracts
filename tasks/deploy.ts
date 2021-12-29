import { subtask, task, types } from "hardhat/config";
import {
  getMainAccount,
  getContractName,
  getTestingAccount,
  setEnvVariable,
  getEnvVariable,
} from "./helpers";

task("check-balance", "Prints out the balance of your account")
  .addOptionalParam(
    "withMainAccount",
    "[Optional] Use the main deployer account",
    false,
    types.boolean
  )
  .setAction(async function (taskArguments, hre) {
    let account = getTestingAccount();
    if (taskArguments.withMainAccount) {
      account = getMainAccount();
    }
    console.log(
      `Account balance for ${account.address}: ${await account.getBalance()}`
    );
  });

task("deploy-verify", "Deploys and verifies a contract")
  .addOptionalParam(
    "withMainAccount",
    "[Optional] Use the main deployer account",
    false,
    types.boolean
  )
  .setAction(async function (taskArguments, hre) {
    await hre.run("deploy", { withMainAccount: taskArguments.withMainAccount });
    const address = getEnvVariable("NFT_CONTRACT_ADDRESS")!;
    console.log(`Contract deployed to address: ${address}`);
    console.log(`Verifying contract...`);
    await hre.run("verify:verify", {
      address: address,
    });
  });

subtask("deploy", "Deploys the contract")
  .addOptionalParam(
    "withMainAccount",
    "[Optional] Use the main deployer account",
    false,
    types.boolean
  )
  .setAction(async function (taskArguments, hre) {
    const name = getContractName();
    let account = getTestingAccount();
    if (taskArguments.withMainAccount) {
      account = getMainAccount();
    }
    const nftContractFactory = await hre.ethers.getContractFactory(
      name,
      account
    );
    console.log(`Deploying ${name}...`);
    const nft = await nftContractFactory.deploy();
    setEnvVariable("NFT_CONTRACT_ADDRESS", nft.address);
  });
