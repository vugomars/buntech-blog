import { Banner } from '@components/ui/examples'
import HeroSlide from '@components/ui/examples/HeroSlide'
import ListProducts from '@components/ui/examples/ListProducts'
import { BaseLayout } from '@components/ui/layout'
import { sanityClient, urlFor } from '../sanity'
import Head from 'next/head'
import { PostList, AdsPost, HotPosts } from '@components/ui/common/posts'

const Home = ({ posts, adsPost }) => {
  const s = {
    wrapper: `mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-4 px-2 pt-2 md:w-5/6`,
  }
  return (
    <>
      <Head>
        <title>BunTech - Blockchain Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
      </Head>

      <HeroSlide href={`/heroslide/hero1.png`} />

      <div className={s.wrapper}>
        <div className="col-span-3 md:col-span-2">
          <AdsPost posts={adsPost} />

          {/* <Post List> */}
          <Banner title="Lastest Posts" pages="New" className="mb-2" />
          <PostList posts={posts} />
          {/* <Post List> */}

          <Banner
            title="List Product"
            pages="Project"
            className="select-none py-2 md:hidden"
          />
          <div className="py-2 md:hidden">
            <ListProducts />
          </div>

          {/* <Mobile Hot List> */}
          <div className="py-2 md:hidden">
            <Banner title="Hot Posts" pages="More" className="select-none" />
            <HotPosts posts={posts} />
          </div>
          {/* <Mobile Hot List> */}
        </div>
        {/* Right Bar */}
        <div className="col-span-1  hidden flex-col items-start justify-end md:grid">
          <div className="flex flex-col justify-start">
            {/* Hot Post */}
            <Banner title="Hot Posts" pages="More" />
            <HotPosts posts={posts} />

            {/* List Products */}
            <Banner title="List Product" pages="Project" className="py-2" />
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
      'categories': *[
          _type == 'category' &&
          post._ref == ^._id
      ],
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
