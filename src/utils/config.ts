import { ThemingProps } from '@chakra-ui/react'
import { mainnet, sepolia, polygon, optimism, arbitrum, localhost } from '@wagmi/chains'

export const SITE_NAME = 'Anon Exchange'
export const SITE_DESCRIPTION = 'anonymous exhcange based on Semaphore protocol'
export const SITE_URL = 'https://anon-exchange.vercel.app'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'lilioo826'
export const SOCIAL_GITHUB = 'hcheng826/anon-exchange'

export const ETH_CHAINS = [mainnet, sepolia, localhost]

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export const NFT_SOLD_GROUP_ID = '1'
export const ETH_DEPOSITED_GROUP_ID = '2'
export const semaphoreStartBlock = {
  11155111: 4152108,
  1337: 0,
}
