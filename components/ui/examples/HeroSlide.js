import { useNetwork } from 'hooks'
import Image from 'next/image'

const HeroSlide = ({ href }) => {
    const s = {
        wrapper: `max-w-[1440px] w-full px-2 md:w-5/6 mx-auto relative`,
    }
    const { network } = useNetwork()
    return (
        <>
            <div className={s.wrapper}>
                {/* <div className="hidden lg:flex relative h-8 w-full overflow-hidden bg-primary">
                <div className="absolute -top-20 left-12 h-40 w-28 origin-top-left rotate-45 bg-secondary"></div>
                <div className="absolute -top-20 left-16 h-40 w-28 origin-top-left rotate-45 bg-secondary/80"></div>
                <div className="absolute -top-20 left-20 h-40 w-28 origin-top-left rotate-45 bg-secondary/60"></div>
                <div className="absolute -top-20 left-24 h-40 w-28 origin-top-left rotate-45 bg-secondary/40"></div>
                <div className="absolute -top-20 left-28 h-40 w-28 origin-top-left rotate-45 bg-secondary/20"></div>
                <div className="absolute -top-20 left-32 h-40 w-28 origin-top-left rotate-45 bg-secondary/10"></div>

                <div className="absolute -top-20 right-12 h-40 w-28 origin-top-right -rotate-45 bg-secondary"></div>
                <div className="absolute -top-20 right-16 h-40 w-28 origin-top-right -rotate-45 bg-secondary/80"></div>
                <div className="absolute -top-20 right-20 h-40 w-28 origin-top-right -rotate-45 bg-secondary/60"></div>
                <div className="absolute -top-20 right-24 h-40 w-28 origin-top-right -rotate-45 bg-secondary/40"></div>
                <div className="absolute -top-20 right-28 h-40 w-28 origin-top-right -rotate-45 bg-secondary/20"></div>
                <div className="absolute -top-20 right-32 h-40 w-28 origin-top-right -rotate-45 bg-secondary/10"></div>

                <div className="flex items-center w-full h-full justify-center text-secondary font-medium">
                    Current Network: {network.data} | We Support: {network.target}
                </div>
            </div>
                  */}
                <Image
                    src={href}
                    width={1500}
                    height={500}
                    className="aniBtn"
                    priority
                />
                {/* <div className="flex items-center justify-center">o o o o o o</div> */}
                <hr className="border-1 my-2 border-primary" />
            </div>
        </>
    )
}

export default HeroSlide
