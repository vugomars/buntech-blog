import { CourseBreadcrumb } from "@components/ui/examples"
import { useEthPrice } from "hooks/tokenPrice/useEthPrice"
import Image from "next/image"

const LINKS = [
    {
        href: "/courses",
        value: "Buy",
    },

    {
        href: "/courses/owned",
        value: "My Courses",
    },
    {
        href: "/courses/manage",
        value: "Manage Courses",
    },
]


export default function CourseHeader() {
    const { eth } = useEthPrice()
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
                    <CourseBreadcrumb items={LINKS} />
                </div>
            </div>
        </>
    )
}
