import { getAllCourse } from '@components/data/courses/fetcher'
import CourseHeader from '@components/ui/common/courses/CourseHeader'
import { Button } from '@components/ui/examples'
import OrderModal from '@components/ui/examples/ModalOrder'
import { BaseLayout } from '@components/ui/layout'
import { useWalletInfo } from 'hooks'
import { useEthPrice } from 'hooks/tokenPrice/useEthPrice'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CoursesPage({ courses }) {
    const [selected, setSelected] = useState(null)
    const { eth } = useEthPrice()
    const { account, network, canPurchase } = useWalletInfo()

    const purchaseCourse = (order) => {
        alert(JSON.stringify(order))
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
                    <div className="grid grid-cols-2 gap-4" key={course.id}>
                        <div className="aniBtn col-span-2 rounded-xl md:col-span-1">
                            <div className="relative h-full">
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
                                            className="aniBtn h-full rounded-xl"
                                            priority
                                        />
                                    </a>
                                </Link>
                            </div>
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
