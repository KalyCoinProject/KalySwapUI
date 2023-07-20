import { ChainId, WKLC } from '@kalycoinproject/sdk'
import { MINICHEF_ADDRESS } from '../../constants'
import * as TOKENS from '../../constants/tokens'
import { BridgeMigrator, DoubleSideStaking, Migration } from './hooks'

export const DOUBLE_SIDE_STAKING: { [key: string]: DoubleSideStaking } = {
  WKLC_ETH_V0: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.ETH[ChainId.KALYCHAIN]],
    stakingRewardAddress: '0xa16381eae6285123c323A665D4D99a6bCfaAC307',
    version: 0,
    multiplier: 0
  },
  WKLC_KSWAP_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.KSWAP[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  KSWAP_USDT_V2: {
    tokens: [TOKENS.KSWAP[ChainId.KALYCHAIN], TOKENS.USDT[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  WKLC_USDT_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.USDT[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  WKLC_BNB_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.BNB[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  WKLC_BTCB_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.BTCB[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  WKLC_ETH_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.ETH[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  WKLC_MATIC_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.MATIC[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  ETH_USDT_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.USDT[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
  BTCB_USDT_V2: {
    tokens: [WKLC[ChainId.KALYCHAIN], TOKENS.USDT[ChainId.KALYCHAIN]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.KALYCHAIN],
    version: 2
  },
}

// The first mapping in the list takes priority if multiple migrations exist from the same pool
export const MIGRATIONS: Migration[] = [
  // From v1 (WKLC)
  { from: DOUBLE_SIDE_STAKING.WKLC_ETH_V1, to: DOUBLE_SIDE_STAKING.WKLC_WETHe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_USDT_V1, to: DOUBLE_SIDE_STAKING.WKLC_USDTe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_WBTC_V1, to: DOUBLE_SIDE_STAKING.WKLC_WBTCe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_LINK_V1, to: DOUBLE_SIDE_STAKING.WKLC_LINKe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_DAI_V1, to: DOUBLE_SIDE_STAKING.WKLC_DAIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_UNI_V1, to: DOUBLE_SIDE_STAKING.WKLC_UNIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_SUSHI_V1, to: DOUBLE_SIDE_STAKING.WKLC_SUSHIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_AAVE_V1, to: DOUBLE_SIDE_STAKING.WKLC_AAVEe_V1 },
  { from: DOUBLE_SIDE_STAKING.WKLC_YFI_V1, to: DOUBLE_SIDE_STAKING.WKLC_YFIe_V1 },
  // From v1 (KSWAP)
  { from: DOUBLE_SIDE_STAKING.KSWAP_ETH_V1, to: DOUBLE_SIDE_STAKING.KSWAP_WETHe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_USDT_V1, to: DOUBLE_SIDE_STAKING.KSWAP_USDTe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_WBTC_V1, to: DOUBLE_SIDE_STAKING.KSWAP_WBTCe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_LINK_V1, to: DOUBLE_SIDE_STAKING.KSWAP_LINKe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_DAI_V1, to: DOUBLE_SIDE_STAKING.KSWAP_DAIe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_UNI_V1, to: DOUBLE_SIDE_STAKING.KSWAP_UNIe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_SUSHI_V1, to: DOUBLE_SIDE_STAKING.KSWAP_SUSHIe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_AAVE_V1, to: DOUBLE_SIDE_STAKING.KSWAP_AAVEe_V1 },
  { from: DOUBLE_SIDE_STAKING.KSWAP_YFI_V1, to: DOUBLE_SIDE_STAKING.KSWAP_YFIe_V1 }
]

export const BRIDGE_MIGRATORS: BridgeMigrator[] = [
  { aeb: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15', ab: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB' }, // ETH
  { aeb: '0xde3A24028580884448a5397872046a019649b084', ab: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118' }, // USDT
  { aeb: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB', ab: '0x50b7545627a5162F82A992c33b87aDc75187B218' }, // WBTC
  { aeb: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651', ab: '0x5947BB275c521040051D82396192181b413227A3' }, // LINK
  { aeb: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a', ab: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70' }, // DAI
  { aeb: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab', ab: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580' }, // UNI
  { aeb: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc', ab: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76' }, // SUSHI
  { aeb: '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9', ab: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9' }, // AAVE
  { aeb: '0x99519AcB025a0e0d44c3875A4BbF03af65933627', ab: '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc' } // YFI
]

export const DOUBLE_SIDE_STAKING_V0: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 0
)
export const DOUBLE_SIDE_STAKING_V1: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 1
)
export const DOUBLE_SIDE_STAKING_V2: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 2
)

export const DOUBLE_SIDE_STAKING_REWARDS_CURRENT_VERSION = Math.max(
  ...Object.values(DOUBLE_SIDE_STAKING).map(staking => staking.version)
)

export const DOUBLE_SIDE_STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: DoubleSideStaking[][]
} = {
  [ChainId.TESTNET]: [],
  [ChainId.KALYCHAIN]: [DOUBLE_SIDE_STAKING_V0, DOUBLE_SIDE_STAKING_V1, DOUBLE_SIDE_STAKING_V2]
}
