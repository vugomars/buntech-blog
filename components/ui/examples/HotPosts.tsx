import Image from 'next/image'

const HotPosts = () => {
    return (
        <>
            <div className="pt-4 relative grid grid-cols-2 gap-4 overflow-hidden">
                <div className="col-span-1">
                    <Image
                        src="/heroslide/hero1.jpg"
                        width={1920}
                        height={1080}
                        className="aniBtn"
                    />
                </div>

                <div className="col-span-1 flex flex-col justify-start overflow-hidden relative">
                    <div className="text-md cursor-pointer overflow-hidden font-bold line-clamp-2 hover:text-gray-500 md:text-medium">
                        Title asldkfjalsdkfa sdlf kasjdlfk ajsdf adfasd asd fasd fasdf
                        asdf asdf asdf asdf a
                    </div>
                    <span className="line-clamp-2 md:text-[10px] md:line-clamp-3">
                        Description Here: "alsdkfjals alsdkf alsdkf jasld fasld fkjasldkf
                        lasdkf jlaskdfj laskdjfl kasjd f alsk djfla skdfl akjsdlfk asldkfj
                        lasdk flaksdjf lkajsdlfk jasldfj la"
                    </span>
                </div>
            </div>
        </>
    )
}

export default HotPosts
