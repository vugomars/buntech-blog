import { getAllCourse } from '@components/data/courses/fetcher'
import { useWeb3 } from '@components/providers'
import CourseHeader from '@components/ui/common/courses/CourseHeader'
import { Button } from '@components/ui/examples'
import OrderModal from '@components/ui/examples/ModalOrder'
import { BaseLayout } from '@components/ui/layout'
import { useWalletInfo } from 'hooks'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CoursesPage({ courses }) {
  const [selected, setSelected] = useState(null)
  const { account, canPurchase } = useWalletInfo()
  const { web3, contract } = useWeb3()

  const purchaseCourse = async (order) => {
    const hexCourseId = web3.utils.utf8ToHex(selected.id)
    const orderHash = web3.utils.soliditySha3(
      { type: 'bytes16', value: hexCourseId },
      { type: 'address', value: account.data }
    )

    const emailHash = web3.utils.sha3(order.email)
    const proof = web3.utils.soliditySha3(
      { type: 'bytes32', value: emailHash },
      { type: 'bytes32', value: orderHash }
    )

    const value = web3.utils.toWei(String(order.price))

    try {
      const result = await contract.methods
        .purchaseCourse(hexCourseId, proof)
        .send({ from: account.data, value })
      console.log(result)
    } catch {
      console.error('Purchase course: Operation has failed.')
    }
  }
  return (
    <>
      <Head>
        <title>Courses - Marketplace Courses of BunTech</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
      </Head>
      <CourseHeader />
      <div className="mx-auto mt-4 grid w-full max-w-[1440px] grid-cols-1 gap-8 px-2 md:w-5/6 md:grid-cols-2">
        {courses.map((course) => (
          <div className="grid grid-cols-12 gap-4" key={course.id}>
            <div className="aniBtn col-span-12 rounded-xl lg:col-span-6">
              <div className="relative h-full rounded-xl shadow-md shadow-gray-500">
                <Link href={`/courses/${course.slug}`}>
                  <a>
                    <Image
                      src={course.coverImage}
                      height={1080}
                      width={1920}
                      alt={course.title}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      className="aniBtn h-full rounded-xl "
                      priority
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-12 flex flex-col items-start justify-between space-y-2 lg:col-span-6">
              <div className="flex flex-col items-start justify-start ">
                <Link href={`/courses/${course.slug}`}>
                  <a className="text-lg font-bold line-clamp-2 hover:text-gray-500 ">
                    {course.title}
                  </a>
                </Link>
                <h2 className="font-base text-sm hover:underline lg:line-clamp-3">
                  {course.description}
                </h2>
              </div>
              <Button
                onClick={() => setSelected(course)}
                disabled={!canPurchase}
                className="aniBtn w-full rounded-md bg-secondary px-4 py-2 font-bold text-primary shadow"
              >
                Purchase
              </Button>
            </div>
          </div>
        ))}
        {selected && (
          <OrderModal
            data={selected}
            onSubmit={purchaseCourse}
            onClose={() => setSelected(null)}
          />
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
