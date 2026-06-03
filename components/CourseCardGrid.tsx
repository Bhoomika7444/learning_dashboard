'use client'

import { motion } from 'framer-motion'
import CourseCard from './CourseCard'
import { Course } from '@/types'

interface Props {
  courses: Course[]
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
}

export default function CourseCardGrid({ courses }: Props) {
  if (courses.length === 0) {
    return (
      <aside
        className="rounded-2xl p-8 text-center text-sm text-[#555568]"
        style={{ border: '1px solid #1e1e2a' }}
      >
        No courses yet — add rows to your Supabase{' '}
        <code className="text-[#7c6af7]">courses</code> table.
      </aside>
    )
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none p-0 m-0"
    >
      {courses.map((course) => (
        <motion.li key={course.id} variants={item}>
          <CourseCard course={course} />
        </motion.li>
      ))}
    </motion.ul>
  )
}
