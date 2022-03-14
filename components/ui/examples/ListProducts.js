import { GrLaunch } from 'react-icons/gr'
import { CgMoreO } from 'react-icons/cg'
import { AiOutlinePicture } from 'react-icons/ai'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { GiToken, GiWorld } from 'react-icons/gi'
import { FaGamepad } from 'react-icons/fa'
import { SiWebassembly } from 'react-icons/si'
import { BsShieldLock } from 'react-icons/bs'

const ListProducts = () => {
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 items-start gap-4 ">
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <GrLaunch />
                    </div>
                    <span className="font-bold m-1 text-primary">
                        LaunchPad
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <GiToken />
                    </div>
                    <span className="text-center font-bold m-1 text-primary">
                        Create Token
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <RiExchangeDollarFill />
                    </div>
                    <span className="text-center font-bold m-1 text-primary">
                        DEX Swap
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <FaGamepad />
                    </div>
                    <span className="text-center font-bold m-1 text-primary">
                        Game NFT
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">

                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <AiOutlinePicture />
                    </div>
                    <span className="font-bold m-1 text-primary text-center">
                        NFT Marketplace
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <SiWebassembly />
                    </div>
                    <span className="font-bold text-center m-1 text-primary">
                        Web Assembly
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <GiWorld />
                    </div>
                    <span className="font-bold m-1 text-primary">
                        DAO
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <BsShieldLock />
                    </div>
                    <span className="font-bold m-1 text-primary text-center">
                        Lock Token
                    </span>
                </div>
                <div className="aniBtn flex w-full flex-col items-center justify-center">
                    <div className="text-3xl rounded-full bg-secondary/50 p-2">
                        <CgMoreO />
                    </div>
                    <span className="font-bold m-1 text-primary">
                        More
                    </span>
                </div>
            </div>
        </>
    )
}

export default ListProducts
