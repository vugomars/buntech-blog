import { Banner, Modal } from '@components/ui/examples'
import HeroSlide from '@components/ui/examples/HeroSlide'
import ListProducts from '@components/ui/examples/ListProducts'
import { BaseLayout } from '@components/ui/layout'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'

const Home = ({ posts, adsPost }) => {
    return (
        <>
            <HeroSlide />
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-4 px-2 pt-2 md:w-5/6">
                <div className="col-span-3 md:col-span-2">
                    {/* <AdsPost /> */}
                    {adsPost.map((post) => (
                        <Link href={`/adspost/${post.slug.current}`} key={post._id}>
                            <div className="relative grid grid-cols-2 gap-4 overflow-hidden">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    width={1920}
                                    height={1080}
                                    className="aniBtn cursor-pointer"
                                />

                                <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] items-center justify-center overflow-hidden border border-2 border-green-200 bg-secondary pl-4 font-bold text-primary blur blur-lg md:pl-2 lg:text-xl"></div>
                                <div className="text-md md:text-md absolute -left-4 flex h-1/4 w-1/4 -skew-x-[18deg] select-none items-center justify-center overflow-hidden bg-secondary pl-4 font-bold text-primary md:pl-2 lg:text-xl">
                                    Categories
                                </div>
                                <div className="col-span-1 flex flex-col justify-between">
                                    <div>
                                        <span className="text-xl cursor-pointer overflow-hidden font-bold line-clamp-2 hover:text-gray-500 md:text-2xl">
                                            {post.title}
                                        </span>
                                        <span className="pt-2 text-[12px] line-clamp-3 md:text-[16px] md:line-clamp-3">
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
                    ))}
                    {/* <AdsPost /> */}

                    <div
                        className="my-4 select-none"
                    >
                        <Banner title="Lastest Posts" pages="New" />
                    </div>

                    {/* <Post List> */}
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-2">
                        {posts.reverse().slice(0, 8).map((post) => (
                            <Link href={`/post/${post.slug.current}`} key={post._id}>
                                <div className="relative overflow-hidden">
                                    <span className="cursor-pointer pb-2 text-[16px] font-medium text-primary md:text-lg">
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
                                    </span>
                                    <span className="mb-2 cursor-pointer overflow-hidden text-xl font-bold line-clamp-1 md:line-clamp-2 hover:text-gray-500 md:text-2xl">
                                        {post.title}
                                    </span>
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        width={1920}
                                        height={1080}
                                        alt="main image"
                                        className="aniBtn cursor-pointer"
                                    />

                                    <span className="pt-1 pb-2 text-[12px] line-clamp-2 md:text-[16px] md:line-clamp-3">
                                        {post.description}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* <Post List> */}

                    <div className="select-none py-2 md:hidden">
                        <Banner title="List Product" pages="Project" />
                    </div>
                    <div className="py-2 md:hidden">
                        <ListProducts />
                    </div>

                    {/* <Hot List> */}
                    <div className="py-2 md:hidden">
                        <div className="select-none">
                            <Banner title="Hot Posts" pages="More" />
                        </div>
                        {posts.map(post => (
                            <Link href={`/adspost/${post.slug.current}`} key={post._id}>
                                <div className="relative grid grid-cols-2 gap-4 overflow-hidden pt-2">
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        width={1920}
                                        height={1080}
                                        className="aniBtn cursor-pointer"
                                    />
                                    <div className="col-span-1 flex flex-col justify-between">
                                        <div>
                                            <span className="text-md cursor-pointer overflow-hidden font-bold line-clamp-2 hover:text-gray-500 md:text-2xl">
                                                {post.title}
                                            </span>
                                            <span className="pt-2 text-[12px] line-clamp-3 md:text-[16px] md:line-clamp-3">
                                                {post.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* <Hot List> */}
                </div>

                {/* Right Bar */}
                <div className="col-span-1 flex hidden flex-col justify-end md:grid items-start">
                    <div className="flex flex-col justify-start">
                        <Banner title="Hot Posts" pages="More" />
                        {posts.map(post => (
                            <Link href={`/adspost/${post.slug.current}`} key={post._id}>
                                <div className="relative grid grid-cols-2 gap-2 pt-2 overflow-hidden">
                                    <div className="col-span-1">
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            width={1920}
                                            height={1080}
                                            className="aniBtn cursor-pointer"
                                        />
                                    </div>
                                    <div className="col-span-1 flex flex-col justify-between">
                                        <div>
                                            <span className="cursor-pointer overflow-hidden font-bold line-clamp-2 md:text-sm hover:text-gray-500 lg:text-lg">
                                                {post.title}
                                            </span>
                                            <span className="pt-2 text-[10px] md:text-[12px] hidden lg:line-clamp-2">
                                                {post.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <div className="py-2">
                            <Banner title="List Product" pages="Project" />
                        </div>
                        <div className="py-2">
                            <ListProducts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.Layout = BaseLayout

export default Home

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
                _id,
                _createdAt,
                title,
                author -> {
                    name,
                    image
                },
                description,
                mainImage,
                slug,
}`
    const adspost = `*[_type == "adspost"] {
                _id,
                _createdAt,
                title,
                author -> {
                    name,
                    image
                },
                description,
                mainImage,
                slug,
}`


    const posts = await sanityClient.fetch(query)
    const adsPost = await sanityClient.fetch(adspost)


    return {
        props: {
            posts,
            adsPost,
        },
    }
}
