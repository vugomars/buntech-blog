import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from '@context/Web3Context'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { FC } from 'react'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout: FC = Component.Layout ?? Noop
  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        autoClose={2000}
      />
    </Web3ContextProvider>
  )
}

export default MyApp
