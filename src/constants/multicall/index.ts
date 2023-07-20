import { ChainId } from '@kalycoinproject/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.TESTNET]: '0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f',
  [ChainId.KALYCHAIN]: '0xD7a3C1253E8ddE3d61B0B6d469b241df307D399D'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
