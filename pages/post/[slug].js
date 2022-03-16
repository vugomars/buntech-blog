import { useWeb3 } from '@components/providers'
import { Banner, Button, ListProducts } from '@components/ui/examples'
import { BaseLayout } from '@components/ui/layout'
import { useAccount } from 'hooks'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from 'sanity'

export default function PostDetail({ post }) {
  const { connect } = useWeb3()
  const { account } = useAccount()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        setSubmitted(false)
      })
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
      </Head>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-4 px-2 pt-2 md:w-5/6">
        <div className="col-span-3 md:col-span-2">
          <img
            src={urlFor(post.mainImage).url()}
            alt=""
            className="h-40 w-full object-cover"
          />
          <article className="">
            <h1 className="mt-4 mb-2 text-3xl font-medium">{post.title}</h1>
            <h2 className="text-justify text-lg font-light">
              {post.description}
            </h2>
            <span className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">
                  {post.author.name} -{' '}
                  {new Date(post._createdAt).toLocaleString()}
                </span>
              </div>

              {post.categories.map((category) => (
                <span className="items-end rounded-full bg-secondary px-2 py-0.5 text-[10px] text-primary">
                  {category.title}
                </span>
              ))}
            </span>
            <div>
              {account.data ? (
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATESET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={post.body}
                  className=""
                  serializers={{
                    h1: (props) => (
                      <h1
                        className="my-5 text-justify text-2xl font-bold underline"
                        {...props}
                      />
                    ),
                    h2: (props) => (
                      <h1
                        className="justify my-5 text-xl font-medium"
                        {...props}
                      />
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 list-disc text-justify">
                        {children}
                      </li>
                    ),
                    normal: (props) => (
                      <p className="text-justify" {...props} />
                    ),
                    link: ({ href, children }) => (
                      <a href={href} className="text-blue-500 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              ) : (
                <div className="flex items-center justify-center py-20">
                  <button
                    className="aniBtn rounded-full border-4 border-secondary bg-secondary px-3 py-1 text-xl font-medium text-primary"
                    onClick={connect}
                  >
                    Connect Wallet to Reading Article!
                  </button>
                </div>
              )}
            </div>
            <hr className="border-1.5 my-8 w-full border-primary" />

            {/* Comments */}
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:col-span-3 md:mt-0">
                  {submitted ? (
                    <div className="my-10 mx-auto flex w-full flex-col rounded-xl bg-secondary py-10 text-primary">
                      <div className="px-4">
                        <h3 className="text-xl font-bold">
                          Mình đã tiếp nhận ý kiến của bạn!
                        </h3>
                        <p className="text-black">
                          Ý kiến của bạn sẽ hiển thị sau khi được phê duyệt!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        {...register('_id')}
                        type="hidden"
                        name="_id"
                        value={post._id}
                      />
                      <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                          <h2 className="text-md font-medium text-primary">
                            Bạn thích bài viết chứ!
                          </h2>
                          <h3 className="text-2xl font-bold">
                            Hãy để lại ý kiến của bạn bên dưới nhé!
                          </h3>
                          <hr className="my-2 border border-primary" />
                          <div className="grid grid-cols-6 gap-6 ">
                            <div className="col-span-6 flex-col items-center">
                              <label
                                htmlFor="first-name"
                                className="block items-center text-sm font-medium text-gray-700"
                              >
                                <span>Name</span>
                                <input
                                  {...register('name', { required: true })}
                                  type="text"
                                  placeholder="Dang Quang Vu"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                />
                              </label>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                <span>Address</span>
                                <input
                                  {...register('address', { required: true })}
                                  placeholder="0x8b164927E4b449e42d5f82E93373Fd3bF4e5c49a"
                                  type="text"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                />
                              </label>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                <span>Comment</span>
                                <textarea
                                  {...register('comment', { required: true })}
                                  rows={8}
                                  placeholder="I Love You Vũ!"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col p-5">
                          {errors.name && (
                            <span className="text-primary">
                              - Vui lòng nhập tên của bạn nhé!
                            </span>
                          )}
                          {errors.address && (
                            <span className="text-primary">
                              - Connect Wallet hộ mình nhé và Cópbi pác vào nhé
                              ^^!
                            </span>
                          )}
                          {errors.comment && (
                            <span className="text-primary">
                              - Để lại ý kiến phải điền vào chứ bạn yêu!
                            </span>
                          )}
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                          {account.data ? (
                            <button
                              className="aniBtn inline-flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-bold text-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                              type="submit"
                            >
                              Submit
                            </button>
                          ) : (
                            <button
                              onClick={connect}
                              className="aniBtn inline-flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-bold text-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                            >
                              Connect Wallet to Submit
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
            {/* Comment */}
            <div className="my-10 mx-auto flex w-full flex-col rounded-lg p-10 shadow shadow-gray-400">
              <h3 className="text-xl text-primary">Comments</h3>
              <hr className="border border-primary" />
              {post.comments.map((comment) => (
                <>
                  <div className="flex flex-col space-y-2 py-4">
                    <span className="flex space-x-2">
                      <p className="font-medium text-primary">Name: </p>{' '}
                      <p className="font-light"> {comment.name}</p>
                    </span>
                    <span className="flex space-x-2">
                      <p className="font-medium text-primary">Address: </p>{' '}
                      <p className="font-light"> {comment.address}</p>
                    </span>
                    <span className="flex space-x-2">
                      <p className="font-medium text-primary">Comment: </p>{' '}
                      <p className="font-light"> {comment.comment}</p>
                    </span>
                  </div>
                  <hr className="border border-primary" />
                </>
              ))}
            </div>
          </article>
        </div>
        <div className="col-span-1 hidden flex-col justify-start md:flex ">
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
  const query = `*[_type == "post"]{
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
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  author -> {
       name,
       image
  },
  'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true
  ],
  'categories': *[
    _type == 'category' &&
    post._ref == ^._id
  ],
  description,
  mainImage,
  slug,
  body
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
