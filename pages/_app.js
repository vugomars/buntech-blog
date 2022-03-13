import '@styles/globals.css'
import { ToastContainer } from 'react-toastify'
import { Web3Provider } from '@components/providers'

import 'react-toastify/dist/ReactToastify.css'

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop

  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        autoClose={2000}
      />
    </Web3Provider>
  )
}

export default MyApp
