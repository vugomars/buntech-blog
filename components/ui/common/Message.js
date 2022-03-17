import { useState } from 'react'

const TYPES = {
  success: 'green',
  warning: 'yellow',
  danger: 'red',
}

export default function Message({ children, type = 'success' }) {
  const [isDisplayed, setIsDisplayed] = useState(true)

  if (!isDisplayed) {
    return null
  }

  const messageType = TYPES[type]

  return (
    <div className={`bg-${messageType}-100 mb-3 rounded-xl`}>
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-3 lg:px-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className={`ml-3 font-medium text-${messageType}-900 truncate`}>
              <span className="hidden md:inline">{children}</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              onClick={() => setIsDisplayed(false)}
              type="button"
              className="-mr-1 flex rounded-md p-2 focus:outline-none focus:ring-2 sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className={`h-6 w-6 text-${messageType}-900`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
