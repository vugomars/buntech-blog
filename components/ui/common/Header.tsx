import Image from 'next/image'
import Link from 'next/link'
import { Web3Button } from '../examples/Web3Button'

const Header = () => {
  const s = {
    wrapper: `max-w-[1400px] w-full px-4 md:w-5/6 mx-auto pt-2`,
    block: `flex items-center justify-between`,
    logo: `aniBtn`,
    rightbar: `flex items-center space-x-4 pb-2`,
    aboutme: `border-4 border-gray-600 hover:border-gray-400 px-2 py-0.5 rounded-full border-double font-medium hover:text-gray-400 text-gray-600 aniBtn cursor-pointer`,
  }
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
            <span className={s.aboutme}>About Me</span>
            <Web3Button />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
