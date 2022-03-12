import { useWeb3 } from '../hooks'
import React, { createContext, ReactChild, ReactNode, useContext } from 'react'
import { Web3InitialState, Web3ProviderState } from '../reducers'

const Web3Context = createContext<Web3ProviderState>(Web3InitialState)

interface Props {
  children: ReactNode
}

export const Web3ContextProvider = ({ children }: Props) => {
  const web3ProviderState = useWeb3()

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3Context() {
  return useContext(Web3Context)
}
