import { Interface } from '@ethersproject/abi'
import { abi as IKalyswapPairABI } from '@kalycoinproject/exchange-contracts/artifacts/contracts/kalyswap-core/interfaces/IKalyswapPair.sol/IKalyswapPair.json'

const KALYSWAP_PAIR_INTERFACE = new Interface(IKalyswapPairABI)

export { KALYSWAP_PAIR_INTERFACE }
