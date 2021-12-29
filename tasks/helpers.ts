import { ethers, Contract } from "ethers";
import { getContractAt } from "@nomiclabs/hardhat-ethers/internal/helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

// Helper method for fetching environment variables from .env
export const getEnvVariable = (
  key: string,
  defaultValue?: string
): string | undefined => {
  if (process.env[key]) {
    return process.env[key];
  }
  if (!defaultValue) {
    throw Error(`${key} is not defined and no default value was provided`);
  }
  return defaultValue;
};

// Helper method for fetching a connection provider to the Ethereum network
export const getProvider = (): ethers.providers.Provider => {
  return ethers.getDefaultProvider(getEnvVariable("NETWORK", "rinkeby"), {
    alchemy: getEnvVariable("ALCHEMY_KEY"),
  });
};

// Helper method for fetching a testing deployer account
export const getTestingAccount = (): ethers.Wallet => {
  return new ethers.Wallet(
    getEnvVariable("TESTING_ACCOUNT_PRIVATE_KEY")!,
    getProvider()
  );
};

// Helper method for fetching the main deployer account
export const getMainAccount = (): ethers.Wallet => {
  return new ethers.Wallet(
    getEnvVariable("MAIN_ACCOUNT_PRIVATE_KEY")!,
    getProvider()
  );
};

// Helper method for fetching a contract instance at a given address
export const getContract = (
  hre: HardhatRuntimeEnvironment,
  contractName?: string,
  mainAccount?: boolean
): Promise<Contract> => {
  let account = getTestingAccount();
  if (mainAccount) {
    account = getMainAccount();
  }
  return getContractAt(
    hre,
    contractName || getContractName(),
    getEnvVariable("NFT_CONTRACT_ADDRESS")!,
    account
  );
};

export const getContractName = (): string => {
  return getEnvVariable("CONTRACT_NAME")!;
};
