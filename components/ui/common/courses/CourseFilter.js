import { Button } from '@components/ui/examples'

export default function CourseFilter() {
  return (
    <div className="my-4 grid grid-cols-1 items-center space-y-4 md:grid-cols-2">
      <div className="col-span-1 mr-2 grid grid-cols-3 rounded-md">
        <input
          type="text"
          name="account"
          id="account"
          className="col-span-2 block rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0x2341ab..."
        />
        <Button className="col-span-1">Search</Button>
      </div>
      <div className="col-span-1 w-full text-gray-700">
        <select
          className="focus:shadow-outline h-10 appearance-none rounded-lg border text-base placeholder-gray-600"
          placeholder="Regular input"
        >
          <option>A regular sized select input</option>
          <option>Another option</option>
          <option>And one more</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"></svg>
        </div>
      </div>
    </div>
  )
}
