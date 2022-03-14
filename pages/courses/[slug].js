import { getAllCourse } from '@components/data/courses/fetcher'
import { BaseLayout } from '@components/ui/layout'

export default function Courses(course) {
  return (
    <>
      <div>
        {course.title}
        {course.description}
        {course.coverImage}
      </div>
    </>
  )
}

export function getStaticPaths() {
  const { data } = getAllCourse()

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const { data } = getAllCourse()
  const course = data.filter((c) => c.slug === params.slug)[0]

  return {
    props: {
      course,
    },
  }
}

Courses.Layout = BaseLayout
