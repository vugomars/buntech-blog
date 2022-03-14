import { useEthPrice } from "hooks/tokenPrice/useEthPrice"
import Link from "next/link"

const Navbar = () => {
    const s = {
        wrapper: `max-w-[1440px] w-full px-2 md:w-5/6 mx-auto`,
        block: `flex items-center justify-between`,
        left: `hidden md:flex text-primary font-medium`,
        leftmb: `flex md:hidden text-primary font-medium `,
        textList: `hover:text-gray-500 cursor-pointer border-r px-2 py-2 first:border-l`,
        rightList: `hover:text-gray-500 cursor-pointer border-r border-l`,
    }

    return (
        <>
            <div className="border-tb border">
                <div className={s.wrapper}>
                    <div className={s.block}>
                        <div className={s.leftmb}>
                            <div className={s.textList}>
                                <p>HOME</p>
                            </div>
                        </div>
                        <div className={s.left}>
                            <Link href="/">
                                <a className={s.textList}>
                                    HOME
                                </a>
                            </Link>
                            <div className={s.textList}>BLOG</div>
                            <div className={s.textList}>PROJECTS</div>
                            <Link href="/courses">
                                <a className={s.textList}>COURSES</a>
                            </Link>
                            <div className={s.textList}>TUTORIAL</div>
                        </div>
                        <div className="hidden text-primary md:flex font-medium">
                        </div>
                        <div className="border-r border-l pl-7">
                            <div className="flex rounded-full py-1">
                                <button className="relative flex items-center justify-center px-2">
                                    <svg
                                        className="absolute -left-5 h-6 w-6 text-gray-600"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                    <input
                                        type="text"
                                        className="w-full rounded-full px-2 py-0.5 focus:border-primary focus:outline-none focus:ring focus:ring-secondary"
                                        placeholder="Search..."
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
