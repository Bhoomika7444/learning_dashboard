import CourseCardSkeleton from './CourseCardSkeleton'

export default function CoursesLoading() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none p-0 m-0">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i}>
          <CourseCardSkeleton />
        </li>
      ))}
    </ul>
  )
}
