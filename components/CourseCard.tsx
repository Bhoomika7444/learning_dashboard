'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import ProgressBar from './ProgressBar'
import { Course } from '@/types'

interface Props {
  course: Course
}

const colorMap: Record<string, string> = {
  Code:     '#7c6af7',
  Layers:   '#4ecdc4',
  Database: '#38bdf8',
  Globe:    '#fb923c',
  BookOpen: '#7c6af7',
  Cpu:      '#4ecdc4',
  Terminal: '#38bdf8',
  Figma:    '#f472b6',
}

export default function CourseCard({ course }: Props) {
  const Icon = (Icons as unknown as Record<string, React.FC<LucideProps>>)[course.icon_name]
  const color = colorMap[course.icon_name] ?? '#7c6af7'

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-5 flex flex-col gap-4 overflow-hidden cursor-default"
      style={{ background: '#13131a', border: '1px solid #1e1e2a' }}
    >
      {/* subtle tint behind card */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${color}12 0%, transparent 55%)`,
        }}
      />

      {/* hover border glow */}
      <motion.span
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ boxShadow: `inset 0 0 0 1px ${color}40` }}
      />

      <header className="relative flex items-start justify-between">
        <span
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          {Icon
            ? <Icon size={17} color={color} />
            : <Icons.BookOpen size={17} color={color} />
          }
        </span>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
        >
          {course.progress}%
        </span>
      </header>

      <h3 className="relative text-sm font-semibold text-[#e2e2e8] leading-snug">
        {course.title}
      </h3>

      <footer className="relative">
        <ProgressBar value={course.progress} color={color} />
        <p className="mt-1.5 text-[11px] text-[#555568]">
          {course.progress < 100
            ? `${100 - course.progress}% remaining`
            : 'Completed 🎉'}
        </p>
      </footer>
    </motion.article>
  )
}
