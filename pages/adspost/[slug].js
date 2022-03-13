import { useWeb3 } from '@components/providers'
import { Banner } from '@components/ui/examples'
import ListProducts from '@components/ui/examples/ListProducts'
import { BaseLayout } from '@components/ui/layout'
import { useAccount } from 'hooks'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from 'sanity'


export default function PostDetail({ post }) {
    const { connect } = useWeb3()
    const { account } = useAccount()

    return (
        <>
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-4 px-2 pt-2 md:w-5/6">
                <div className="col-span-3 md:col-span-2">
                    <img
                        src={urlFor(post.mainImage).url()}
                        alt=""
                        className="mt-2 h-40 w-full object-cover"
                    />
                    <article className="">
                        <h1 className="mt-6 mb-3 text-3xl font-medium">{post.title}</h1>
                        <h2 className="text-lg font-light">{post.description}</h2>
                        <span className="flex items-center space-x-2 ">
                            <Image
                                src={urlFor(post.author.image).url()}
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">
                                {post.author.name} - {new Date(post._createAt).toLocaleString()}
                            </span>
                        </span>
                        <div>
                            {account.data ?
                                <PortableText
                                    dataset={process.env.NEXT_PUBLIC_SANITY_DATESET}
                                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                    content={post.body}
                                    className=""
                                    serializers={{
                                        h1: (props) => (
                                            <h1 className="my-5 text-2xl font-bold underline" {...props} />
                                        ),
                                        h2: (props) => <h1 className="my-5 text-xl font-medium" {...props} />,
                                        li: ({ children }) => (
                                            <li className="ml-4 list-disc">{children}</li>
                                        ),
                                        link: ({ href, children }) => (
                                            <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                                        )
                                    }}
                                /> :
                                <div className="flex items-center justify-center py-20">
                                    <button
                                        className="bg-secondary text-primary px-3 py-1 rounded-full border-4 border-secondary font-medium text-xl aniBtn"
                                        onClick={connect}
                                    >
                                        Connect Wallet to Reading Article!
                                    </button>
                                </div>
                            }
                        </div>
                    </article>
                </div>
                <div className="col-span-1 flex hidden flex-col justify-start md:grid">
                    <div className="flex flex-col justify-start">
                        <Banner title="Hot Posts" pages="More" />
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

PostDetail.Layout = BaseLayout

export const getStaticPaths = async () => {
    const query = `*[_type == "adspost"]{
  _id,
  slug {
     current
    }
  }`

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }) => {
    const query = `*[_type == "adspost" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  author -> {
  name,
  image
},
'comments': *[
  _type =="comment" &&
  post._ref == ^._id &&
  approved == true
],
description,
mainImage,
slug,
body,
}`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60 * 5,
    }
}
