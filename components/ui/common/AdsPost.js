import Image from 'next/image'

const AdsPost = () => {
  return (
    <>
      <div className="relative grid grid-cols-2 gap-4 overflow-hidden">
        <Image
          src="/heroslide/hero1.jpg"
          width={1920}
          height={1080}
          className="aniBtn"
        />

        <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] items-center justify-center overflow-hidden border border-2 border-green-200 bg-secondary pl-4 font-bold text-primary blur blur-lg md:pl-2 lg:text-xl"></div>
        <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] items-center justify-center overflow-hidden bg-secondary pl-4 font-bold text-primary md:pl-2 lg:text-xl">
          Navigation
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <span className="text-md cursor-pointer overflow-hidden font-bold line-clamp-2 hover:text-gray-500 md:text-2xl">
              Title asldkfjalsdkfa sdlf kasjdlfk ajsdf adfasd asd fasd fasdf
              asdf asdf asdf asdf a
            </span>
            <span className="pt-2 text-[12px] line-clamp-3 md:text-[16px] md:line-clamp-3">
              Description Here: "alsdkfjals alsdkf alsdkf jasld fasld fkjasldkf
              lasdkf jlaskdfj laskdjfl kasjd f alsk djfla skdfl akjsdlfk asldkfj
              lasdk flaksdjf lkajsdlfk jasldfj la"
            </span>
          </div>
          <span className="cursor-pointer text-[16px] font-medium text-primary md:text-lg">
            Read More! <span className="text-[8px]">Được tài trợ!</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default AdsPost
