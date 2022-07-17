import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { MULTISIG_ADDRESS } from "../../utils/accounts"
import { isTestNetwork } from "../../utils/network"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre
  const { get, deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const oldUSDPool = await get("JioUSDPool")
  const oldUSDPoolLPToken = await get("JioUSDPoolLPToken")
  const newUSDPool = await get("JioUSDPoolV2")
  const newUSDPoolLPToken = await get("JioUSDPoolV2LPToken")

  const DAI = await get("DAI")
  const BUSD = await get("BUSD")
  const USDC = await get("USDC")

  const usdDataStruct = {
    oldPoolAddress: oldUSDPool.address,
    oldPoolLPTokenAddress: oldUSDPoolLPToken.address,
    newPoolAddress: newUSDPool.address,
    newPoolLPTokenAddress: newUSDPoolLPToken.address,
    underlyingTokens: [DAI.address, BUSD.address, USDC.address],
  }

  const owner = isTestNetwork(await getChainId()) ? deployer : MULTISIG_ADDRESS

  await deploy("SwapMigrator", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    args: [usdDataStruct, owner],
  })
}
export default func
func.tags = ["SwapMigrator"]
func.dependencies = ["USDPoolV2"]
