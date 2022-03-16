import { Message } from "@components/ui/common"
import { CourseFilter, CourseHeader, OwnedCourseCard } from "@components/ui/common/courses"
import { Button } from "@components/ui/examples"
import { BaseLayout } from "@components/ui/layout"


export default function OnwedCourses() {
    return (
        <>
            <CourseHeader />
            <div className="max-w-[1440px] w-full md:w-5/6 mx-auto px-2">
                <CourseFilter />
                <OwnedCourseCard>
                    <Message color='red' textColor="text-red-800" className="bg-red-100">
                        Purchase
                    </Message>
                    <Button>
                        Watch the Course
                    </Button>
                </OwnedCourseCard>
            </div>
        </>
    )
}

OnwedCourses.Layout = BaseLayout
