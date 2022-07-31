import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { execute, get, getOrNull, log, read, save } = deployments
  const { deployer } = await getNamedAccounts()

  // check if the pool is already deployed
  const Jio3celUSDPool = await getOrNull("Jio3celUSDPool")
  if (Jio3celUSDPool) {
    log(`reusing "Jio3celUSDPool" at ${Jio3celUSDPool.address}`)
  } else {
    // Constructor arguments
    const TOKEN_ADDRESSES = [
      (await get("cDAI")).address,
      (await get("cUSDC")).address,
      (await get("cUSDT")).address,
    ]
    const TOKEN_DECIMALS = [18, 6, 6]
    const LP_TOKEN_NAME = "Jio celDAI/celUSDC/celUSDT"
    const LP_TOKEN_SYMBOL = "jio3celUSD"
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
    await save("Jio3celUSDPool", {
      abi: (await get("SwapFlashLoan")).abi,
      address: usdSwapAddress,
    })
  }

  const lpTokenAddress = (await read("Jio3celUSDPool", "swapStorage")).lpToken
  log(`celUSD pool LP Token at ${lpTokenAddress}`)

  await save("Jio3celUSDPoolLPToken", {
    abi: (await get("LPToken")).abi, // LPToken ABI
    address: lpTokenAddress,
  })
}
export default func
func.tags = ["celUSDPool"]
func.dependencies = [
  "SwapUtils",
  "SwapDeployer",
  "SwapFlashLoan",
  "celUSDPoolTokens",
]
