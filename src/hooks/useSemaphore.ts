import { SemaphoreEthers } from '@semaphore-protocol/data'
import { useCallback, useState } from 'react'
import { SemaphoreContextType } from '../context/SemaphoreContext'
import { useNetwork } from 'wagmi'
import { semaphoreAddress } from 'abis'
import { ETH_DEPOSITED_GROUP_ID, NFT_SOLD_GROUP_ID, semaphoreStartBlock } from 'utils/config'

export default function useAnonExchange(): SemaphoreContextType {
  const [nftSoldGroup, setNftSoldGroup] = useState<any[]>([])
  const [ethDepositedGroup, setEthDepositedGroup] = useState<any[]>([])
  const { chain } = useNetwork()

  const refreshGroups = useCallback(async (): Promise<void> => {
    if (!chain) {
      return
    }
    const semaphore = new SemaphoreEthers(chain.rpcUrls.default.http[0], {
      address: semaphoreAddress[chain.id as keyof typeof semaphoreAddress],
      startBlock: semaphoreStartBlock[chain.id as keyof typeof semaphoreStartBlock],
    })

    const _nftSoldGroup = await semaphore.getGroupMembers(NFT_SOLD_GROUP_ID)
    const _ethDepositedGroup = await semaphore.getGroupMembers(ETH_DEPOSITED_GROUP_ID)

    setNftSoldGroup(_nftSoldGroup)
    setEthDepositedGroup(_ethDepositedGroup)
  }, [chain])

  return {
    nftSoldGroup,
    ethDepositedGroup,
    refreshGroups,
  }
}
