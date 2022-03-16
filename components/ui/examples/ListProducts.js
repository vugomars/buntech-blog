import { GrLaunch } from 'react-icons/gr'
import { CgMoreO } from 'react-icons/cg'
import { AiOutlinePicture } from 'react-icons/ai'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { GiToken, GiWorld } from 'react-icons/gi'
import { FaGamepad } from 'react-icons/fa'
import { SiWebassembly } from 'react-icons/si'
import { BsShieldLock } from 'react-icons/bs'
import Link from 'next/link'

const lists = [
    {
        id: 1,
        href: "#",
        icon: <GrLaunch />,
        title: "LaunchPad",
    },
    {
        id: 2,
        href: "#",
        icon: <GiToken />,
        title: "Create Token",
    },
    {
        id: 3,
        href: "#",
        icon: <RiExchangeDollarFill />,
        title: "DEX Swap",
    },
    {
        id: 4,
        href: "#",
        icon: <FaGamepad />,
        title: "Game NFT",
    },
    {
        id: 5,
        href: "#",
        icon: <AiOutlinePicture />,
        title: "NFT Marketplace",
    },
    {
        id: 6,
        href: "#",
        icon: <SiWebassembly />,
        title: "Web Assembly",
    },
    {
        id: 7,
        href: "#",
        icon: <GiWorld />,
        title: "DAO",
    },
    {
        id: 8,
        href: "#",
        icon: <BsShieldLock />,
        title: "Lock Token",
    },
    {
        id: 9,
        href: "#",
        icon: <CgMoreO />,
        title: "More",
    },
]

const ListProducts = () => {
    return (
        <>
            <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-3 lg:grid-rows-3 ">
                {lists.map((item) => (
                    <Link href="#" key={item.id}>
                        <a className="aniBtn flex w-full flex-col items-center justify-center">
                            <div className="rounded-full bg-secondary/50 p-2 text-3xl">
                                {item.icon}
                            </div>
                            <span className="text-center m-1 font-bold text-primary">{item.title}</span>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ListProducts
