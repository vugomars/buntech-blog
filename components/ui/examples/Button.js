
export default function Button({
    children,
    className = "",
    ...rest
}) {

    return (
        <button
            {...rest}
            className={`disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 border rounded-md text-base font-medium ${className}`}>
            {children}
        </button>
    )
}
