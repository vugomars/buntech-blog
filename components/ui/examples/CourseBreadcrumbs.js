import ActiveLink from "./ActiveLink";

export default function CourseBreadcrumbs({ items }) {
    return (
        <>
            <div>
                <ol className="flex leading-none items-center text-primary divide-x divide-primary">
                    {items.map((item, i) =>
                        <li key={item.value} className={`${i == 0 ? "pr-4" : "px-4"} font-medium text-gray-800 hover:text-gray-700`}>
                            <ActiveLink href={item.href} >
                                <a>
                                    {item.value}
                                </a>
                            </ActiveLink>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

