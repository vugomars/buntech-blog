import { getAllCourse } from '@components/data/courses/fetcher'
import { Button, CBreadcrumb } from '@components/ui/examples'
import OrderModal from '@components/ui/examples/ModalOrder'
import { BaseLayout } from '@components/ui/layout'
import { useWalletInfo } from 'hooks'
import { useEthPrice } from 'hooks/tokenPrice/useEthPrice'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CoursesPage({ courses }) {
  const [selected, setSelected] = useState(null)
  const { eth } = useEthPrice()
  const { account, network, canPurchase } = useWalletInfo()

  return (
    <>
      <div className="mx-auto mt-4 w-full max-w-[1440px] px-2 md:w-5/6">
        <div className="flex items-center justify-center space-x-8 ">
          <div className="aniBtn flex h-12 w-56 select-none items-center justify-center rounded-xl bg-secondary">
            <Image src="/logo/small-eth.webp" width={40} height={40} />
            <p className="text-sm font-bold text-primary md:text-xl">
              = {eth.data}$
            </p>
          </div>

          <div className="aniBtn flex h-12 w-56 select-none items-center justify-center rounded-xl bg-secondary">
            <p className="text-sm font-bold text-primary md:text-xl">
              {eth.perItem}$ = 100$
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px] px-2 md:w-5/6">
        <div className="flex items-center justify-center space-x-8 ">
          <CBreadcrumb />
        </div>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-[1440px] grid-cols-1 gap-8 px-2 md:w-5/6 md:grid-cols-2">
        {courses.map((course) => (
          <div className="grid grid-cols-2 gap-4" key={course.id}>
            <div className="col-span-2 md:col-span-1">
              <Link href={`/courses/${course.slug}`}>
                <a>
                  <Image
                    src={course.coverImage}
                    height={1080}
                    width={1920}
                    alt={course.title}
                    layout="responsive"
                    objectFit="fill"
                    objectPosition="center"
                    className="aniBtn h-full rounded-xl"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between space-y-2 md:col-span-1">
              <div className="">
                <Link href={`/courses/${course.slug}`}>
                  <a className="text-lg font-bold line-clamp-2 hover:text-gray-500 ">
                    {course.title}
                  </a>
                </Link>
                <h2 className="font-base text-sm line-clamp-3 hover:underline">
                  {course.description}
                </h2>
              </div>
              <Button
                onClick={() => setSelected(course)}
                disabled={!canPurchase}
                className="aniBtn rounded-md bg-secondary px-4 py-2 font-bold text-primary"
              >
                Purchase
              </Button>
            </div>
          </div>
        ))}
        {selected && (
          <OrderModal data={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourse()
  return {
    props: {
      courses: data,
    },
  }
}

CoursesPage.Layout = BaseLayout
