import { Footer, Header, Navbar } from '@components/ui/common'
import { HotPosts } from '../common/posts'
import { Banner, ListProducts } from '../examples'


export default function BaseLayout({ children, posts }) {
    return (
        <>
            <Header />
            <Navbar />
            <div className="fit">{children}</div>
            <Footer />
        </>
    )
}


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
    const category = `*[_type == "category"] {
title,
  description
}`


    const posts = await sanityClient.fetch(query)
    const adsPost = await sanityClient.fetch(adspost)
    const categories = await sanityClient.fetch(category)


    return {
        props: {
            posts,
            adsPost,
            categories
        },
    }
}
