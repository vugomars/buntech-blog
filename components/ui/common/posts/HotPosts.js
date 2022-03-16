import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";


export default function HotPosts({ posts }) {
    return (
        <div>
            {posts.map(post => (
                <Link href={`/post/${post.slug.current}`} key={post._id}>
                    <div className="relative grid grid-cols-2 gap-2 pt-2 overflow-hidden">
                        <div className="col-span-1">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                width={1920}
                                height={1080}
                                className="aniBtn rounded-md cursor-pointer"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <div>
                                <span className="cursor-pointer overflow-hidden font-bold text-justify line-clamp-2 md:text-sm hover:text-gray-500 lg:text-lg">
                                    {post.title}
                                </span>
                                <span className="pt-2 text-[10px] md:text-[12px] hidden lg:line-clamp-3 text-justify">
                                    {post.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
