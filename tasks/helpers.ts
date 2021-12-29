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

// Helper method for fetching a wallet account using an environment variable for the PK
export const getAccount = (): ethers.Wallet => {
  return new ethers.Wallet(
    getEnvVariable("ACCOUNT_PRIVATE_KEY")!,
    getProvider()
  );
};

// Helper method for fetching a contract instance at a given address
export const getContract = (
  hre: HardhatRuntimeEnvironment,
  contractName?: string
): Promise<Contract> => {
  const account = getAccount();
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
