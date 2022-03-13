import { useWeb3 } from '@hooks/Web3Client'
import React from 'react'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}

const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <button onClick={connect}>Connect </button>
  ) : (
    <button> Loading ...</button>
  )
}

interface DisconnectButton {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectButton) => {
  return disconnect ? (
    <button onClick={disconnect}></button>
  ) : (
    <button>Loading...</button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect, address } = useWeb3()

  return web3Provider ? (
    <button
      onClick={disconnect}
      className="aniBtn rounded-full border-4 border-double border-primary px-2 py-0.5 font-bold text-primary"
    >
      {address?.substring(0, 4)}...{address?.substring(address.length - 4)}
    </button>
  ) : (
    <>
      <div className="relative">
        <div className="aniBtn absolute -z-10 h-full w-full rounded-full border-4 border-primary bg-primary px-2 py-0.5 font-bold text-white blur blur-sm hover:bg-white hover:text-primary"></div>
        <div className="aniBtn rounded-full border-4 border-primary bg-primary px-2 py-0.5 font-bold text-white hover:bg-white hover:text-primary">
          <ConnectButton connect={connect} />
        </div>
      </div>
    </>
  )
}
