import { ChainId, WKLC, KALYCHAIN_TESTNET } from '@kalycoinproject/sdk'
import { BTCB, KSWAP, ETH, BNB } from '../../constants/tokens'
import { SingleSideStaking } from './hooks'

export const SINGLE_SIDE_STAKING: { [key: string]: SingleSideStaking } = {
  WKLC_V0: {
    rewardToken: WKLC[ChainId.KALYCHAIN],
    conversionRouteHops: [],
    stakingRewardAddress: '0xD49B406A7A29D64e081164F6C3353C599A2EeAE9',
    version: 0
  },
  BTBC_V0: {
    rewardToken: BTCB[ChainId.KALYCHAIN],
    conversionRouteHops: [WKLC[ChainId.KALYCHAIN]],
    stakingRewardAddress: '0xf0eFf017644680B9878429137ccb2c041b4Fb701',
    version: 0
  },
  ETH_V0: {
    rewardToken: ETH[ChainId.KALYCHAIN],
    conversionRouteHops: [WKLC[ChainId.KALYCHAIN]],
    stakingRewardAddress: '0xfe1d712363f2B1971818DBA935eEC13Ddea474cc',
    version: 0
  },
  BNB_V0: {
    rewardToken: BNB[ChainId.KALYCHAIN],
    conversionRouteHops: [WKLC[ChainId.KALYCHAIN]],
    stakingRewardAddress: '0x78d4BFb3b50E5895932073DC5Eb4713eb532941B',
    version: 0
  },
  KSWAP_V0: {
    rewardToken: KSWAP[ChainId.KALYCHAIN],
    conversionRouteHops: [WKLC[ChainId.KALYCHAIN]],
    stakingRewardAddress: '0x88afdaE1a9F58Da3E68584421937E5F564A0135b',
    version: 0
  }
}

export const SINGLE_SIDE_STAKING_V0: SingleSideStaking[] = Object.values(SINGLE_SIDE_STAKING).filter(
  staking => staking.version === 0
)
export const SINGLE_SIDE_STAKING_REWARDS_CURRENT_VERSION = Math.max(
  ...Object.values(SINGLE_SIDE_STAKING).map(staking => staking.version)
)

const TESTNET_SINGLE_SIDE_STAKING: SingleSideStaking[] =
  KALYCHAIN_TESTNET.contracts?.staking
    ?.filter(contract => contract.active)
    .map(contract => ({
      rewardToken: KSWAP[ChainId.TESTNET],
      conversionRouteHops: [WKLC[ChainId.TESTNET]],
      stakingRewardAddress: contract.address,
      version: 0
    })) ?? []

export const SINGLE_SIDE_STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: SingleSideStaking[][]
} = {
  [ChainId.KALYCHAIN]: [SINGLE_SIDE_STAKING_V0],
  [ChainId.TESTNET]: [TESTNET_SINGLE_SIDE_STAKING]
}
