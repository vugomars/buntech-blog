import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";

export default function AdsPost({ posts }) {
    return (
        <div>
            {
                posts.map((post) => (
                    <Link href={`/adspost/${post.slug.current}`} key={post._id}>
                        <div className="relative grid grid-cols-2 gap-4 overflow-hidden">
                            {post.categories}
                            <Image
                                src={urlFor(post.mainImage).url()}
                                width={1920}
                                height={1080}
                                className="aniBtn rounded-md cursor-pointer"
                            />
                            <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] items-center justify-center overflow-hidden border border-2 border-green-200 bg-secondary pl-4 font-bold text-primary blur blur-lg md:pl-2 lg:text-xl"></div>
                            <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] select-none items-center justify-center overflow-hidden bg-secondary pl-4 font-bold text-primary md:pl-2 lg:text-xl">
                                Categories
                            </div>
                            <div className="col-span-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xl cursor-pointer overflow-hidden font-bold line-clamp-2 text-justify hover:text-gray-500 md:text-2xl">
                                        {post.title}
                                    </span>
                                    <span className="pt-2 text-[12px] line-clamp-3 md:text-[16px] md:line-clamp-3 text-justify">
                                        {post.description}
                                    </span>
                                </div>
                                <span
                                    className="cursor-pointer text-[16px] font-medium text-primary md:text-lg">
                                    Read More! <span className="text-[8px]">Được tài trợ!</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
