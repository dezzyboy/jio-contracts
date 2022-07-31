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
  GW_V1_1: "71401",
  RINKEBY: "4",
  AURORA_TEST: "1313161555",
  Emerald_TEST: "42261",
  Meter_TEST: "83",
  GODWOKEN: "71402",
}

export function isMainnet(networkId: string): boolean {
  return (
    networkId == CHAIN_ID.FTM_MAIN ||
    networkId == CHAIN_ID.TESTNET ||
    networkId == CHAIN_ID.GODWOKEN
  )
}

export function isTestNetwork(networkId: string): boolean {
  return (
    networkId == CHAIN_ID.HARDHAT ||
    networkId == CHAIN_ID.HARDHAT ||
    networkId == CHAIN_ID.ROPSTEN ||
    networkId == CHAIN_ID.KOVAN ||
    networkId == CHAIN_ID.ARBITRUM_TESTNET ||
    networkId == CHAIN_ID.GW_V1_1 ||
    networkId == CHAIN_ID.RINKEBY ||
    networkId == CHAIN_ID.AURORA_TEST ||
    networkId == CHAIN_ID.Emerald_TEST ||
    networkId == CHAIN_ID.Meter_TEST
  )
}
