import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { isTestNetwork } from "../../utils/network"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre
  const { deploy, get } = deployments
  const { deployer } = await getNamedAccounts()

  if (isTestNetwork(await getChainId())) {
    await deploy("SwapFlashLoan", {
      from: deployer,
      log: true,
      libraries: {
        SwapUtils: (await get("SwapUtils")).address,
        AmplificationUtils: (await get("AmplificationUtils")).address,
      },
      skipIfAlreadyDeployed: true,
    })
  }

  await deploy("SwapFlashLoan", {
    from: deployer,
    log: true,
    libraries: {
      SwapUtils: (await get("SwapUtils")).address,
      AmplificationUtils: (await get("AmplificationUtils")).address,
    },
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["SwapFlashLoan"]
func.dependencies = ["AmplificationUtils", "SwapUtils"]
