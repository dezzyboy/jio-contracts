# jioswap-contract-deployement


for testing purposes you can import the private key below to get access to test tokens


```
826359f55d241ff8ba0219c211123ae3a890ddd5f60e1f73d5d1c4c34a42abcf
```

## Installation

```bash
$ npm i
```

## Usage

### Build

```bash
$ npm run build
```

 Deployed tesnet contracts on Godwoken
┌─────────┬──────────────────────┬──────────────────────────────────────────────┐
│ (index) │          0           │                      1                       │
├─────────┼──────────────────────┼──────────────────────────────────────────────┤
│    0    │ 'AmplificationUtils' │ '0x62ccDad42de7B2DE428a55c29d6B7D01e9278772' │
│    1    │        'BUSD'        │ '0x31D56EA29aEded3A17f0304301D5d4E3074d6049' │
│    2    │        'DAI'         │ '0x8aab5FE56f0aD4500BD8e3aE1Fc84ec4c634fE4C' │
│    3    │        'JIO'         │ '0xb5727223892A38d2Ef7Ca7365dcaC9970A63E82e' │
│    4    │      'LPToken'       │ '0x8f8Be4f77Ed3B03498E4Ca42a0F7650CDa9C5462' │
│    5    │     'Multicall2'     │ '0x011Ce274EdfaFC06C820045Df8de8e55BCDD2432' │
│    6    │        'Swap'        │ '0xC2AB36719B1E79Ce3AEC3f434A6b2D3034fB8e78' │
│    7    │    'SwapDeployer'    │ '0x528507d48D462599362fEB20528Ec6290a290CA1' │
│    8    │   'SwapFlashLoan'    │ '0xEC617b4De52e1e547C8159031833990349385f12' │
│    9    │     'SwapUtils'      │ '0xd99C3026FC7565abf65228504F55357fA784A126' │
│   10    │        'USDC'        │ '0xFA5F1f1Ac6583B8ce8883094A3535ce9c6Bf98E5' │
│   11    │      'Vesting'       │ '0x7af1A0DbCD42D5072ad7c1972B33D370ae2d980E' │
│   12    │        'USDT'        │ '0xdCf13035fEA06734362e4268894d17fE171D5ecE' │
│   13    │    'JioUSD4Pool'     │ '0xF091162E536d580421f5bE1430218dD119F9F9E1' │
│   14    │ 'JioUSD4PoolLPToken' │ '0x6C5a796ec599783a67A66eDD8D41222eF8f55eF1' │
│   15    │     'JioUSDPool'     │ '0xE168B220211d57D9E411DADc526ac96A44B84688' │
│   16    │ 'JioUSDPoolLPToken'  │ '0xfFB4fC3848B89CeC44413f471b2Aa01677cd1bC9' │
│   17    │        'WBTC'        │ '0x075bbB1562f3eBEcB5D2eFa1941FD9a98a1FaB4F' │
│   18    │        'JBTC'        │ '0x5a1E1D513e912F399533E5287A7d6DC68e72281a' │
│   19    │     'MiniChefV2'     │ '0xA02a24f2736ff04bD3cf232502B0dbEF52397aE3' │
└─────────┴──────────────────────┴──────────────────────────────────────────────┘



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
