import Image from 'next/image'

const AdsPost = () => {
  return (
    <>
      <div className=" relative grid grid-cols-2 gap-4">
        <Image
          src="/heroslide/hero1.jpg"
          width={1920}
          height={1080}
          className="aniBtn"
        />
        <div className="text-md absolute  flex h-2/6 w-1/4 -skew-y-6 items-center justify-center bg-white/80 font-bold text-primary md:text-2xl">
          Navigation
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <span className="text-md cursor-pointer overflow-hidden font-bold line-clamp-2 hover:text-gray-500 md:text-2xl">
              Title asldkfjalsdkfa sdlf kasjdlfk ajsdf adfasd asd fasd fasdf
              asdf asdf asdf asdf a
            </span>
            <div className="pt-2 text-justify text-[12px] line-clamp-2 md:text-[16px] md:line-clamp-3">
              Description Here: "alsdkfjals alsdkf alsdkf jasld fasld fkjasldkf
              lasdkf jlaskdfj laskdjfl kasjd f alsk djfla skdfl akjsdlfk asldkfj
              lasdk flaksdjf lkajsdlfk jasldfj la"
            </div>
          </div>
          <span className="cursor-pointer text-[16px] font-medium text-primary md:text-lg">
            Read More!
          </span>
        </div>
      </div>
    </>
  )
}

export default AdsPost
