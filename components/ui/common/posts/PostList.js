import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";

export default function PostList({ posts }) {
    return (
        <div className="grid grid-cols-1 gap-4">
            {posts.reverse().slice(0, 8).map((post) => (
                <Link href={`/post/${post.slug.current}`} key={post._id}>
                    <div className="relative overflow-hidden">
                        <span className="mb-2 cursor-pointer overflow-hidden text-xl text-justify font-bold line-clamp-1 md:line-clamp-2 hover:text-gray-500 md:text-2xl">
                            {post.title}
                        </span>
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-2">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    width={1920}
                                    height={1080}
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="main image"
                                    className="aniBtn rounded-md cursor-pointer"
                                />
                            </div>
                            <div className="col-span-4 h-full flex flex-col justify-between">
                                <div className="flex text-[12px] line-clamp-2 md:text-lg md:line-clamp-3 text-justify">
                                    {post.description}
                                </div>
                                <div className="cursor-pointer text-[16px] font-medium text-primary md:text-lg">
                                    <Link href="/about">
                                        <a>
                                            <span className="flex items-center space-x-2 ">
                                                <Image
                                                    src={urlFor(post.author.image).url()}
                                                    width={30}
                                                    height={30}
                                                    className="rounded-full"
                                                />
                                                <span>{post.author.name}</span>
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}
