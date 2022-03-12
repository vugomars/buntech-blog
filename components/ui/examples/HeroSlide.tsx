import Image from 'next/image'
import { GrNext, GrPrevious } from 'react-icons/gr'

const HeroSlide = () => {
  const s = {
    wrapper: `max-w-[1440px] w-full px-2 md:w-5/6 mx-auto relative`,
  }
  return (
    <>
      <div className={s.wrapper}>
        <Image
          src="/heroslide/hero1.jpg"
          width={1500}
          height={500}
          className="aniBtn"
        />
        <div className="flex items-center justify-center">o o o o o o</div>
      </div>
    </>
  )
}

export default HeroSlide
