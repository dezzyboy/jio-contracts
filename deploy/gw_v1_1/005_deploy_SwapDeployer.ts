import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { isTestNetwork } from "../../utils/network"
import { MULTISIG_ADDRESS } from "../../utils/accounts"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre
  const { deploy, execute, read } = deployments
  const { deployer } = await getNamedAccounts()

  // if (isTestNetwork(await getChainId())) {
  //   await deploy("SwapDeployer", {
  //     from: deployer,
  //     log: true,
  //     skipIfAlreadyDeployed: true,
  //   })
  // }

  await deploy("SwapDeployer", {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
  })

  const currentOwner = await read("SwapDeployer", "owner")

  if (isTestNetwork(await getChainId()) && currentOwner != MULTISIG_ADDRESS) {
    await execute(
      "SwapDeployer",
      { from: deployer, log: true },
      "transferOwnership",
      MULTISIG_ADDRESS,
    )
  }
}
export default func
func.tags = ["SwapDeployer"]
