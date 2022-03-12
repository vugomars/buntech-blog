import AdsPost from '@components/ui/common/AdsPost'
import HeroSlide from '@components/ui/examples/HeroSlide'
import { BaseLayout } from '@components/ui/layout'
import PostsList from './posts'

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-3 px-2 pt-2 md:w-5/6">
        <div className="col-span-3 md:col-span-2">
          <AdsPost />
          <PostsList />
        </div>
      </div>
    </>
  )
}

Home.Layout = BaseLayout

export default Home
