import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { ethers } from "hardhat"
import { GeneralizedSwapMigrator } from "../../build/typechain"
import { MULTISIG_ADDRESS } from "../../utils/accounts"
import { CHAIN_ID } from "../../utils/network"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre
  const { execute, deploy, get, getOrNull, log, save } = deployments
  const { deployer } = await getNamedAccounts()

  // Manually check if the pool is already deployed
  const genSwapMigrator = await getOrNull("GeneralizedSwapMigrator")
  if (genSwapMigrator) {
    log(`reusing "GeneralizedSwapMigrator" at ${genSwapMigrator.address}`)
  } else {
    await deploy("GeneralizedSwapMigrator", {
      from: deployer,
      log: true,
    })

    const contract: GeneralizedSwapMigrator = await ethers.getContract(
      "GeneralizedSwapMigrator",
    )
    const batchCall = [
      await contract.populateTransaction.addMigrationData(
        (
          await get("JioUSDPool")
        ).address,
        {
          newPoolAddress: (await get("JioUSDPoolV2")).address,
          oldPoolLPTokenAddress: (await get("JioUSDPoolLPToken")).address,
          newPoolLPTokenAddress: (await get("JioUSDPoolV2LPToken")).address,
          tokens: [
            (await get("DAI")).address,
            (await get("BUSD")).address,
            (await get("USDC")).address,
          ],
        },
        false,
      ),
    ]

    if ((await getChainId()) == CHAIN_ID.GW_V1_1) {
      batchCall.push(
        await contract.populateTransaction.transferOwnership(MULTISIG_ADDRESS),
      )
    }

    const batchCallData = batchCall
      .map((x) => x.data)
      .filter((x): x is string => !!x)

    await execute(
      "GeneralizedSwapMigrator",
      {
        from: deployer,
        log: true,
      },
      "batch",
      batchCallData,
      true,
    )
  }
}
export default func
func.tags = ["GeneralizedSwapMigrator"]
