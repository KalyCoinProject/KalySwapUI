import { ChainId, Token, CHAINS } from '@kalycoinproject/sdk'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const KSWAP: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    CHAINS[ChainId.TESTNET].contracts!.kswap,
    18,
    CHAINS[ChainId.TESTNET].kswap_symbol,
    'Kalyswap'
  ),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    CHAINS[ChainId.KALYCHAIN].contracts!.kswap,
    18,
    CHAINS[ChainId.KALYCHAIN].kswap_symbol,
    'Kalyswap'
  )
}


export const ETH: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 18, 'ETH', 'Ether'),
  [ChainId.KALYCHAIN]: new Token(ChainId.KALYCHAIN, '0x89aE5C335372bF4d06ece4cEE1e92D04c3fdf1e0', 18, 'ETH', 'Ether')
}

export const USDT: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 6, 'USDT', 'Tether USD'),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    '0xe6828eF9923943899199dc4464B791499025d5aC',
    6,
    'USDT',
    'Tether USD'
  )
}

export const USDt: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 6, 'USDT', 'Tether USD'),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    '0xe6828eF9923943899199dc4464B791499025d5aC',
    6,
    'USDT',
    'Tether USD'
  )
}

export const BTCB: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 8, 'BTCB', 'Wrapped Bitcoin'),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    '0x70d50a152b335A20236E0faf7579b58F186B639f',
    8,
    'BTCB',
    'Wrapped Bitcoin'
  )
}

export const BNB: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 18, 'BNB', 'Binance'),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    '0x74D0BC02C633d207C35c6a1D8fda6E7104EC47Db',
    18,
    'BNB',
    'Binance'
  )
}

export const MATIC: { [chainId in ChainId]: Token } = {
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, ZERO_ADDRESS, 18, 'MATIC', 'Matic Token'),
  [ChainId.KALYCHAIN]: new Token(
    ChainId.KALYCHAIN,
    '0x74685449581BA264B09d01109142b4ad44c687ed',
    18,
    'MATIC',
    'Matic Token'
  )
}