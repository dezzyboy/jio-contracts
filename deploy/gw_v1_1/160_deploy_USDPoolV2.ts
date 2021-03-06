import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { execute, get, getOrNull, log, read, save } = deployments
  const { deployer } = await getNamedAccounts()

  // check if the pool is already deployed
  const JioUSDPoolV2 = await getOrNull("JioUSDPoolV2")
  if (JioUSDPoolV2) {
    log(`reusing "JioUSDPoolV2" at ${JioUSDPoolV2.address}`)
  } else {
    // Constructor arguments
    const TOKEN_ADDRESSES = [
      (await get("DAI")).address,
      (await get("BUSD")).address,
      (await get("USDC")).address,
    ]
    const TOKEN_DECIMALS = [18, 18, 18]
    const LP_TOKEN_NAME = "Jio DAI/BUSD/USDC V2"
    const LP_TOKEN_SYMBOL = "jioUSD-V2"
    const INITIAL_A = 200
    const SWAP_FEE = 10e6 // 10bps
    const ADMIN_FEE = 5e6

    const receipt = await execute(
      "SwapDeployer",
      { from: deployer, log: true },
      "deploy",
      (
        await get("SwapFlashLoan")
      ).address,
      TOKEN_ADDRESSES,
      TOKEN_DECIMALS,
      LP_TOKEN_NAME,
      LP_TOKEN_SYMBOL,
      INITIAL_A,
      SWAP_FEE,
      ADMIN_FEE,
      (
        await get("LPToken")
      ).address,
    )

    const newPoolEvent = receipt?.events?.find(
      (e: any) => e["event"] == "NewSwapPool",
    )
    const usdSwapAddress = newPoolEvent["args"]["swapAddress"]
    log(`deployed USD pool V2 (targeting "SwapFlashLoan") at ${usdSwapAddress}`)
    await save("JioUSDPoolV2", {
      abi: (await get("SwapFlashLoan")).abi,
      address: usdSwapAddress,
    })
  }

  const lpTokenAddress = (await read("JioUSDPoolV2", "swapStorage")).lpToken
  log(`USD pool V2 LP Token at ${lpTokenAddress}`)

  await save("JioUSDPoolV2LPToken", {
    abi: (await get("LPToken")).abi, // LPToken ABI
    address: lpTokenAddress,
  })
}
export default func
func.tags = ["USDPoolV2"]
func.dependencies = [
  "SwapUtils",
  "SwapDeployer",
  "SwapFlashLoan",
  "USDPoolTokens",
]
