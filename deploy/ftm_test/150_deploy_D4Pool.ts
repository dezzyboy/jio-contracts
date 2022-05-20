import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { execute, get, getOrNull, log, read, save } = deployments
  const { deployer } = await getNamedAccounts()

  // Manually check if the pool is already deployed
  const JioUSD4Pool = await getOrNull("JioUSD4Pool")
  if (JioUSD4Pool) {
    log(`reusing "JioUSD4Pool" at ${JioUSD4Pool.address}`)
  } else {
    // Constructor arguments
    const TOKEN_ADDRESSES = [
      (await get("BUSD")).address,
      (await get("DAI")).address,
      (await get("USDC")).address,
      (await get("USDT")).address,
    ]
    const TOKEN_DECIMALS = [18, 18, 18, 18]
    const LP_TOKEN_NAME = "Jio BUSD/DAI/USDC/USDT"
    const LP_TOKEN_SYMBOL = "jio4USD"
    const INITIAL_A = 200
    const SWAP_FEE = 10e6 // 4bps
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
    log(`deployed USD pool  (targeting "SwapFlashLoan") at ${usdSwapAddress}`)
    await save("JioUSD4Pool", {
      abi: (await get("SwapFlashLoan")).abi,
      address: usdSwapAddress,
    })
  }

  const lpTokenAddress = (await read("JioUSD4Pool", "swapStorage")).lpToken
  log(`USD 4pool LP Token at ${lpTokenAddress}`)

  await save("JioUSD4PoolLPToken", {
    abi: (await get("LPToken")).abi, // LPToken ABI
    address: lpTokenAddress,
  })
}
export default func
func.tags = ["USD4Pool"]
func.dependencies = [
  "SwapUtils",
  "SwapDeployer",
  "SwapFlashLoan",
  "USD4PoolTokens",
]
