export const CHAIN_ID = {
  FTM_MAIN: "250",
  BSC_MAIN: "56",
  BSC_TEST: "97",
  TESTNET: "4002",
  ROPSTEN: "3",
  KOVAN: "42",
  HARDHAT: "31337",
  ARBITRUM_MAINNET: "42161",
  ARBITRUM_TESTNET: "421611",
  GW_TEST: "71393",
  GW_v1: "868455272153094",
}

export function isMainnet(networkId: string): boolean {
  return (
    networkId == CHAIN_ID.FTM_MAIN ||
    networkId == CHAIN_ID.TESTNET ||
    networkId == CHAIN_ID.BSC_TEST
  )
}

export function isTestNetwork(networkId: string): boolean {
  return (
    networkId == CHAIN_ID.HARDHAT ||
    networkId == CHAIN_ID.HARDHAT ||
    networkId == CHAIN_ID.ROPSTEN ||
    networkId == CHAIN_ID.KOVAN ||
    networkId == CHAIN_ID.ARBITRUM_TESTNET ||
    networkId == CHAIN_ID.GW_TEST ||
    networkId == CHAIN_ID.GW_v1
  )
}
