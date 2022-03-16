import { ToastContainer } from 'react-toastify'
import { Web3Provider } from '@components/providers'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

import '@styles/globals.css'

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ?? Noop

    return (
        <Web3Provider>
            <Head>
                <meta charSet="utf-8" />
                <title>BunTech - Blockchain Blog</title>
                <meta name="theme-color" content="#000000" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
            </Head>
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
