import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { isTestNetwork } from "../../utils/network"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre
  const { deploy, get } = deployments
  const { deployer } = await getNamedAccounts()

  if (isTestNetwork(await getChainId())) {
    await deploy("SwapUtilsV1", {
      from: deployer,
      log: true,
      skipIfAlreadyDeployed: true,
    })
  }

  await deploy("SwapUtils", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["SwapUtils"]
