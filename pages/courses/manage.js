import { CourseFilter, CourseHeader, OwnedCourseCard } from "@components/ui/common/courses"
import { Button } from "@components/ui/examples"
import { BaseLayout } from "@components/ui/layout"


export default function ManageCourses() {
    return (
        <>
            <CourseHeader />
            <div className="max-w-[1440px] w-full md:w-5/6 mx-auto px-2">
                <CourseFilter />
                <OwnedCourseCard>
                    <div className="grid grid-cols-6 mr-2 relative rounded-md gap-4">
                        <input
                            type="text"
                            name="account"
                            id="account"
                            className="col-span-6 focus:ring-indigo-500 lg:col-span-4 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0x2341ab..." />
                        <Button className="bg-secondary col-span-6 lg:col-span-2">
                            Verify
                        </Button>
                    </div>
                </OwnedCourseCard>
            </div>
        </>
    )
}

ManageCourses.Layout = BaseLayout
