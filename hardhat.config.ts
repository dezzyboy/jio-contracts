import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-web3"
import "@nomiclabs/hardhat-etherscan"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "hardhat-deploy"
import "@rumblefishdev/hardhat-polyjuice-plugin"
import "hardhat-spdx-license-identifier"

import { HardhatUserConfig } from "hardhat/config"
import dotenv from "dotenv"
import { ethers } from "ethers"

dotenv.config()

if (process.env.HARDHAT_FORK) {
  process.env["HARDHAT_DEPLOY_FORK"] = process.env.HARDHAT_FORK
}

let config: HardhatUserConfig = {
  defaultNetwork: "meter_test",
  networks: {
    hardhat: {
      deploy: ["./deploy/mainnet/"],
    },
    meter_test: {
      url: `https://rpctest.meter.io/`,
      chainId: 83,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/meter_test"],
    },
    emerald_test: {
      url: `https://testnet.emerald.oasis.dev`,
      chainId: 42261,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/emerald_test"],
    },
    godwoken: {
      url: `https://godwoken-testnet-web3-v1-rpc.ckbapp.dev`,
      chainId: 868455272153094,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/godwoken"],
      // godwokenConfig: {
      //   privateKey:
      //     "",
      //   rollupTypeHash: "",
      //   ethAccountLockCodeHash: "",
      //   delayAfterDeploy: true,
      // },
    },
    aurora_test: {
      url: "https://testnet.aurora.dev/",
      chainId: 1313161555,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/aurora/"],
    },
    ftmmain: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/mainnet/"],
    },
    bscmain: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/bsc/"],
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      chainId: 97,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/bsc/"],
    },
    ftmtest: {
      url: "https://rpc.testnet.fantom.network",
      chainId: 4002,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    ftmtest2: {
      url: "https://rpc.testnet.fantom.network",
      gasPrice: ethers.utils.parseUnits("100.01", "gwei").toNumber(),
      accounts: {
        mnemonic: process.env.PRIVATE_KEY,
      },
      deploy: ["./deploy/mainnet/"],
    },
    arbitrum_testnet: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/arbitrum/"],
    },
    arbitrum_mainnet: {
      url: "https://arb1.arbitrum.io/rpc",
      gasPrice: ethers.utils.parseUnits("2", "gwei").toNumber(),
      deploy: ["./deploy/arbitrum/"],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/17d2d8676a294d9bb00a829f2ff785cf",
      chainId: 4,
      accounts: [`${process.env.PRIVATE_KEY}`],
      deploy: ["./deploy/rinkeby/"],
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./build/artifacts",
    cache: "./build/cache",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.5.12",
      },
    ],
  },
  typechain: {
    outDir: "./build/typechain/",
    target: "ethers-v5",
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 150,
    enabled: true,
    maxMethodDiff: 10,
  },
  mocha: {
    timeout: 2000000,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      42161: 0,
    },
    libraryDeployer: {
      default: 0, // use a different account for deploying libraries on the hardhat network
      1: 0, // use the same address as the main deployer on mainnet
      42161: 0, // use the same address on arbitrum mainnet
    },
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
}

if (process.env.ETHERSCAN_API) {
  config = { ...config, etherscan: { apiKey: process.env.ETHERSCAN_API } }
}

if (process.env.ACCOUNT_PRIVATE_KEYS) {
  config.networks = {
    ...config.networks,
    mainnet: {
      ...config.networks?.mainnet,
      accounts: JSON.parse(process.env.ACCOUNT_PRIVATE_KEYS),
    },
    arbitrum_mainnet: {
      ...config.networks?.arbitrum_mainnet,
      accounts: JSON.parse(process.env.ACCOUNT_PRIVATE_KEYS),
    },
  }
}

if (process.env.FORK_FTM_MAIN === "true" && config.networks) {
  console.log("FORK_FTM_MAIN is set to true")
  config = {
    ...config,
    networks: {
      ...config.networks,
      hardhat: {
        ...config.networks.hardhat,
        forking: {
          url: process.env.ALCHEMY_API ? process.env.ALCHEMY_API : "",
        },
        chainId: 1,
      },
    },
    external: {
      deployments: {
        localhost: ["deployments/mainnet"],
      },
    },
  }
}

export default config
