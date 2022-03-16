import { getAllCourse } from "@components/data/courses/fetcher"
import { Message } from "@components/ui/common"
import { CourseFilter, CourseHeader, OwnedCourseCard } from "@components/ui/common/courses"
import { Button } from "@components/ui/examples"
import { BaseLayout } from "@components/ui/layout"
import { useAccount, useOwnedCourses, useWalletInfo } from "hooks"


export default function OnwedCourses({ courses }) {
    const { account } = useAccount()
    const { ownedCourses } = useOwnedCourses(courses, account.data)
    return (
        <>
            <CourseHeader />
            <div className="max-w-[1440px] w-full md:w-5/6 mx-auto px-2">
                <CourseFilter />
                {ownedCourses.data?.map(course => (
                    <OwnedCourseCard key={course.id} course={course}>
                        {/* <Message color="red"> Purchase </Message> */}
                        <Button className="w-full bg-secondary">
                            Watch the Course
                        </Button>
                    </OwnedCourseCard>
                ))}
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

OnwedCourses.Layout = BaseLayout
