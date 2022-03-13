import Image from 'next/image'
import Link from 'next/link'
import { AiFillLike } from 'react-icons/ai'
import { useWeb3 } from '@components/providers'
import { useAccount, useNetwork } from 'hooks'

const Header = () => {
    const s = {
        wrapper: `max-w-[1440px] w-full px-2 md:w-5/6 mx-auto pt-2`,
        block: `flex items-center justify-between`,
        logo: `aniBtn`,
        rightbar: `flex items-center space-x-4 pb-2`,
        aboutme: `border-4 border-gray-600 hover:border-gray-400 px-2 py-0.5 rounded-full border-double font-medium hover:text-gray-400 text-gray-600 aniBtn cursor-pointer`,
    }
    const { connect, isLoading, requireInstall } = useWeb3()
    const { account } = useAccount()
    const { network } = useNetwork()
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.block}>
                    <div className={s.logo}>
                        <Link href="/">
                            <a>
                                <Image src="/images/logo-web.png" width={150} height={43} />
                            </a>
                        </Link>
                    </div>
                    <div className={s.rightbar}>
                        <span className={s.aboutme}>
                            <span className="hidden md:flex">About Me</span>
                            <span className="md:hidden">
                                <AiFillLike />
                            </span>
                        </span>
                        <div className="relative">
                            <div className="absolute -z-10 h-full w-full rounded-full border-4 border-primary bg-primary px-3 py-0.5 font-bold text-white blur blur-sm hover:bg-white hover:text-primary"></div>
                            {
                                account.isAdmin ?
                                    <button className="rounded-full border-4 border-primary bg-white text-primary px-3 py-0.5 font-bold border-double hover:bg-white hover:text-primary">
                                        Hi Admin Vũ
                                    </button> :
                                    isLoading ?
                                        <button className="rounded-full border-4 border-primary bg-primary px-3 py-0.5 font-bold text-white hover:bg-white hover:text-primary">
                                            Loading...
                                        </button>
                                        : account.data ?
                                            <button className="rounded-full border-4 border-primary bg-white text-primary px-3 py-0.5 font-bold border-double hover:bg-white hover:text-primary">
                                                {(account.data).substring(0, 4)}...{(account.data).substring((account.data).length - 3)}
                                            </button>
                                            : requireInstall ?
                                                <button

                                                    onClick={() =>
                                                        window.open('https://metamask.io/download.html', '_blank')
                                                    }
                                                    className="rounded-full border-4 border-primary bg-primary px-3 py-0.5 font-bold text-white hover:bg-white hover:text-primary"
                                                >
                                                    Install Metamask
                                                </button>
                                                :
                                                <button
                                                    onClick={connect}
                                                    className="rounded-full border-4 border-primary bg-primary px-3 py-0.5 font-bold text-white hover:bg-white hover:text-primary"
                                                >
                                                    Connect
                                                </button>
                            }
                        </div>
                        {isLoading ?
                            null : requireInstall ? null :
                                !network.isSupported ?
                                    <button className="rounded-full border-4 border-primary bg-white text-primary px-3 py-0.5 font-bold border-double hover:bg-white hover:text-primary ml-4 hidden md:flex">
                                        We Support: {network.target}
                                    </button> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
