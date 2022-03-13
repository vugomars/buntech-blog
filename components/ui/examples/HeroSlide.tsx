import Image from 'next/image'

const HeroSlide = () => {
  const s = {
    wrapper: `max-w-[1440px] w-full px-2 md:w-5/6 mx-auto relative`,
  }
  return (
    <>
      <div className={s.wrapper}>
        <Image
          src="/heroslide/hero1.png"
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
