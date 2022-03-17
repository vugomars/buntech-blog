import Image from "next/image";

export default function OwnedCourseCard({ children, course }) {

    return (
        <div className="bg-white border grid grid-cols-6 shadow overflow-hidden sm:rounded-lg mb-3">
            <h3 className="px-4 pt-5 sm:px-6 text-lg col-span-6 font-medium text-gray-900">
                {course.title}
            </h3>
            <div className="px-4 py-5 sm:px-6 lg:col-span-3 col-span-6 rounded-xl">
                <div className="shadow-md shadow-gray-200 rounded-xl shadow-gray-500 w-full">
                    <Image
                        src={course.coverImage}
                        alt={course.title}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        layout="responsive"
                        className="aniBtn rounded-xl"
                    />
                </div>
            </div>

            <div className="col-span-6 lg:col-span-3 flex flex-col justify-center">
                <dl className="px-4 md:px-6">
                    <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-b rounded-xl">
                        <dt className="text-sm font-medium text-gray-700">
                            Course ID
                        </dt>
                        <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2 truncate">
                            {course.ownedCourseId}
                        </dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-t rounded-xl">
                        <dt className="text-sm font-medium text-gray-900">
                            Proof
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-ellipsis overflow-hidden">
                            {course.proof}
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        {children}
                    </div>
                </dl>
            </div>
        </div>
    )
}
