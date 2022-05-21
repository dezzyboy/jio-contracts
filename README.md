# jioswap-contract-deployement

## Installation

```bash
$ npm i
```

## Usage

### Build

```bash
$ npm run build
```

``` Deployed tesnet contracts on Godwoken
┌─────────┬────────────────────────┬──────────────────────────────────────────────┐
│ (index) │           0            │                      1                       │
├─────────┼────────────────────────┼──────────────────────────────────────────────┤
│    0    │      'LPTokenV1'       │ '0xA46Df89094ee1Cf4792655B5ad9b27e250aEcD28' │
│    1    │       'LPToken'        │ '0xAf9415DCBc96e2b6b15DA96d90Fd2236095C0DDB' │
│    2    │ 'AmplificationUtilsV1' │ '0x4e613A4560F7fE1f75314eE1486fA2FFffB729f7' │
│    3    │  'AmplificationUtils'  │ '0x63227ee8c98d91405BB6446267eA2C5b5E807bFb' │
│    4    │    'MetaSwapUtils'     │ '0xec6BdB456dd316cbB769c5d69a12f95439a0175e' │
│    5    │     'SwapUtilsV1'      │ '0x11080f644caB7E93F534241Bba9b1Ee5e7d5D8Fa' │
│    6    │      'SwapUtils'       │ '0x97Ea9E3354d96a7b3A789E0741FE84a3C08C1617' │
│    7    │    'SwapDeployerV1'    │ '0xc0ea015806D2E91cB31Ba090B10E59B19F9edF37' │
│    8    │     'SwapDeployer'     │ '0xf9bFDaf91c0dC038edf6Ac281eDcF8637Ed80908' │
│    9    │        'SwapV1'        │ '0x83f7C46f90caF6999f757356CEE70293fD4Bace1' │
│   10    │         'Swap'         │ '0x27D0EC0a7e6d88E012071e5c108c0B96a3F0Aedf' │
│   11    │   'SwapFlashLoanV1'    │ '0xD9095f5Ea572E636ce8735dE734169739ff6CD92' │
│   12    │    'SwapFlashLoan'     │ '0x880a7B369A51f41f229Ca7a9E830a7ba4cE26b58' │
│   13    │         'DAI'          │ '0x5D88d62E4fc1C5cFF1C6C71826D216c9DD68282a' │
│   14    │         'USDC'         │ '0x8eDFfa2b2d04981d799392d41C887Eefd5903663' │
│   15    │         'BUSD'         │ '0xb65897eF2448cc44BA1DEa4497812457497C4d74' │
│   16    │      'Multicall'       │ '0x2A6a5315a046A795132b8bAc831766cAf27575eA' │
│   17    │      'Multicall2'      │ '0x36551241F7EFCFC118801773Ebf13f87032ee7a2' │
│   18    │         'USDT'         │ '0xb9731D6dFd8ec254295776b9F0A6e0347b22F997' │
│   19    │     'JioUSD4Pool'      │ '0xE22103552561980d6880DDeff01fC39823aD68b5' │
│   20    │  'JioUSD4PoolLPToken'  │ '0x29944C66238171f3Be87F307f05689970B044Eeb' │
│   21    │      'JioUSDPool'      │ '0xF32Ae1FDcD8128d57aB748B042c2f79245bb58E6' │
│   22    │  'JioUSDPoolLPToken'   │ '0x491a1AE69EFe6A8F77B0C5F380baD2870D06e736' │
│   23    │       'Vesting'        │ '0x5901bD492d18EF81228F782De2FBBf74ceCEDAdd' │
│   24    │         'JIO'          │ '0xEBb9863a619B5DF1cAfA0De7C64aC1c0553285D5' │
│   25    │      'MiniChefV2'      │ '0xB5b248AfdA831681c58143bc40927e5bA1071981' │
└─────────┴────────────────────────┴──────────────────────────────────────────────┘

Deployed testnet contracts on FTM
┌─────────┬──────────────────────┬──────────────────────────────────────────────┐
│ (index) │          0           │                      1                       │
├─────────┼──────────────────────┼──────────────────────────────────────────────┤
│    0    │ 'AmplificationUtils' │ '0x1da9a5236EC057815E0De238aDcBB80A6a394010' │
│    1    │        'BUSD'        │ '0x70eFd867D93EEd9CF2367Fa9F3F80794744530d0' │
│    2    │        'DAI'         │ '0xA64c2a4470708c4709654Dd0363D3A48F9bB656c' │
│    3    │    'JioUSD4Pool'     │ '0x9790306Fd108DdEF81B06AAB21dD79c362BD15ab' │
│    4    │ 'JioUSD4PoolLPToken' │ '0xbBc575276C6f0A0E485206ADd224d30A7d53a4ca' │
│    5    │     'JioUSDPool'     │ '0x07A31A5798a54EC519246A651B091f60Ce8e8404' │
│    6    │ 'JioUSDPoolLPToken'  │ '0x036CADABB29894988bA61Cb641C2b6CbC82Cea9f' │
│    7    │      'LPToken'       │ '0x8054dF275eb3Fb653Ad0D478881444cbFA09AC98' │
│    8    │   'MetaSwapUtils'    │ '0xFE13260cB4Eb9A99D69BcDdcfA5DC2e68e0865a5' │
│    9    │     'Multicall'      │ '0xD696Fa4E3a92811618aE97d3eb10F8143227C503' │
│   10    │     'Multicall2'     │ '0x2e48A8b5b7AF3B95f361103E0b8768FA3C22A786' │
│   11    │        'Swap'        │ '0x06754E7f21E357456C67Dfd3eD3Fc2993b5e3ff7' │
│   12    │    'SwapDeployer'    │ '0x8aF1ffcdcD0d71af660eDE28140bA5eB58e5d184' │
│   13    │   'SwapFlashLoan'    │ '0xD322739d031a0b3a2F4F820CA8f81c9aD378E559' │
│   14    │     'SwapUtils'      │ '0x9dC298C1Fbd9c3B450C070C6435F9199e33ce6Bf' │
│   15    │        'USDC'        │ '0xdACE8b0f5B51F5C36dAFA073967DE7bda2d39bAc' │
│   16    │        'USDT'        │ '0xfDe53bc19Ed094Dfa234E9789Ed938F009495C88' │
│   17    │      'Vesting'       │ '0x95a995b040C1a7389b929146DcD83C4c31f41A9F' │
│   18    │        'JIO'         │ '0xA579Fe24520180f9A42Eb00761b9E72aaAA25C95' │
│   19    │     'MiniChefV2'     │ '0x4aF90cF00DC74062c33F9Fd17Ba8aA8AB85379dA' │
└─────────┴──────────────────────┴──────────────────────────────────────────────┘

 Deployed contracts on Emerald Oasis Network
┌─────────┬────────────────────────┬──────────────────────────────────────────────┐
│ (index) │           0            │                      1                       │
├─────────┼────────────────────────┼──────────────────────────────────────────────┤
│    0    │      'LPTokenV1'       │ '0x8054dF275eb3Fb653Ad0D478881444cbFA09AC98' │
│    1    │       'LPToken'        │ '0xFA524D37bF59E8560cA5752E0cc6839e927a8571' │
│    2    │ 'AmplificationUtilsV1' │ '0xFE13260cB4Eb9A99D69BcDdcfA5DC2e68e0865a5' │
│    3    │  'AmplificationUtils'  │ '0x9dC298C1Fbd9c3B450C070C6435F9199e33ce6Bf' │
│    4    │    'MetaSwapUtils'     │ '0x8aF1ffcdcD0d71af660eDE28140bA5eB58e5d184' │
│    5    │     'SwapUtilsV1'      │ '0x06754E7f21E357456C67Dfd3eD3Fc2993b5e3ff7' │
│    6    │      'SwapUtils'       │ '0xD322739d031a0b3a2F4F820CA8f81c9aD378E559' │
│    7    │    'SwapDeployerV1'    │ '0xA64c2a4470708c4709654Dd0363D3A48F9bB656c' │
│    8    │     'SwapDeployer'     │ '0xdACE8b0f5B51F5C36dAFA073967DE7bda2d39bAc' │
│    9    │        'SwapV1'        │ '0x70eFd867D93EEd9CF2367Fa9F3F80794744530d0' │
│   10    │         'Swap'         │ '0xD696Fa4E3a92811618aE97d3eb10F8143227C503' │
│   11    │   'SwapFlashLoanV1'    │ '0x2e48A8b5b7AF3B95f361103E0b8768FA3C22A786' │
│   12    │    'SwapFlashLoan'     │ '0xfDe53bc19Ed094Dfa234E9789Ed938F009495C88' │
│   13    │         'DAI'          │ '0x19036dB19741F242DAc16818301249dAFf2DE454' │
│   14    │         'USDC'         │ '0x95a995b040C1a7389b929146DcD83C4c31f41A9F' │
│   15    │         'BUSD'         │ '0x4aF90cF00DC74062c33F9Fd17Ba8aA8AB85379dA' │
│   16    │      'Multicall'       │ '0xd8e8A625D9B2b635e94E85f2233c73CfD2247bd1' │
│   17    │      'Multicall2'      │ '0xc6DE58C2917b3d2b79ddED4f2bf7aD94EC0b5759' │
│   18    │         'USDT'         │ '0x4b9C66D08960C5785E698F934FBbBaFd2E605A53' │
│   19    │     'JioUSD4Pool'      │ '0xb0e46279859906EDB715dDAB177B2c9d0c99a42e' │
│   20    │  'JioUSD4PoolLPToken'  │ '0xdEE02B18617597Ab33E3fBe3822CBd3FbE6Cee53' │
│   21    │      'JioUSDPool'      │ '0xC063dc6B24d6b9a45E891239E6670117031D8fb1' │
│   22    │  'JioUSDPoolLPToken'   │ '0xeDFD35F8150119429e5CfF4B6c6148b26F93ddaA' │
│   23    │       'Vesting'        │ '0xB73fBd0c9198455473de7426923183167A32D05e' │
│   24    │         'JIO'          │ '0xd0d796710d05FF71040B6dfb965Bd73e87b7F3B7' │
│   25    │      'MiniChefV2'      │ '0x7e8385A47b7A13eb7f83e2cD4a26F05D6076574e' │
└─────────┴────────────────────────┴──────────────────────────────────────────────┘

METER CHAIN

  0    │      'LPToken'       │ '0xE7cA5ea1dAc43976cD511E2e0dB73Ad567668E05' │
│    1    │ 'AmplificationUtils' │ '0xe135Db210DfDb2e5beCbB01C86cc48BE3bd1D045' │
│    2    │   'MetaSwapUtils'    │ '0xd8682D533736EeE80f5e020899EcACEf8BcbAb93' │
│    3    │     'SwapUtils'      │ '0x2910F6077534464e34c39255edB7d5175B1e366C' │
│    4    │    'SwapDeployer'    │ '0xA5098a96fDeeF5fbAF79f6A8A7dcf39B13D293F7' │
│    5    │        'Swap'        │ '0x94B863e3aB139C65A1981F60D3cbec01397d73E9' │
│    6    │   'SwapFlashLoan'    │ '0xEb06611986317fEb96284523099D218e6C55A8F7' │
│    7    │        'DAI'         │ '0x6D942D2503cDcf996f6B7319187Caea7C9e19107' │
│    8    │        'USDC'        │ '0x55E6942310d9644c36a4fe33943c4a1380aCdd53' │
│    9    │        'BUSD'        │ '0xA7c7AC379c8C8d8dD50AEE80B6985De4651bCf71' │
│   10    │     'Multicall'      │ '0x7c07f4B5D786e8283eD907F58337c82fD131389b' │
│   11    │     'Multicall2'     │ '0x145199e6Ecb93A638DED7852A87965bCBb57C206' │
│   12    │        'USDT'        │ '0x0fea846C1A01E1c30689cb3CcbA74C8F3183e43e' │
│   13    │    'JioUSD4Pool'     │ '0xcbb5D150A9D1F633eB47AE11070eC59Cb71A6d2f' │
│   14    │ 'JioUSD4PoolLPToken' │ '0xbf415387d113fd5Ef74B6d756e1d9d8657A4902d' │
│   15    │     'JioUSDPool'     │ '0x3c32a20087F31978b2126F32833458033439EC4d' │
│   16    │ 'JioUSDPoolLPToken'  │ '0xAFD987b06662694B1d2F0e25DafD8b030DE56123' │
│   17    │      'Vesting'       │ '0xb2d92847cdc132Fe0059d8E803b283096CBAEC5c' │
│   18    │        'JIO'         │ '0x57119CF1030F9845d96567da8F8C3e41B4303aaD' │
│   19    │     'MiniChefV2'     │ '0x824bEE671ae37Bf583E18A7E1060A902aE2FdAaA' │
└─────────┴──────────────────────┴─────────────────────────────────────────────
