'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

// hardcoded to avoid hydration mismatch
const WEEKS: number[][] = [
  [1, 0, 3, 2, 0, 4, 1],
  [0, 2, 1, 3, 4, 0, 2],
  [3, 1, 0, 4, 2, 1, 0],
  [2, 4, 3, 0, 1, 3, 2],
  [0, 1, 2, 4, 3, 0, 1],
  [4, 0, 1, 2, 0, 3, 4],
  [1, 3, 4, 0, 2, 1, 0],
  [0, 2, 0, 3, 1, 4, 2],
  [3, 1, 2, 0, 4, 0, 3],
  [2, 0, 1, 3, 0, 2, 1],
]

const colors: Record<number, string> = {
  0: '#1e1e2a',
  1: '#352e6e',
  2: '#4d44a0',
  3: '#6358cc',
  4: '#7c6af7',
}

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl p-5 overflow-hidden"
      style={{ background: '#13131a', border: '1px solid #1e1e2a' }}
    >
      <header className="flex items-center gap-2 mb-3">
        <Activity size={14} color="#7c6af7" />
        <h2 className="text-xs font-semibold text-[#555568] uppercase tracking-wider">
          Activity
        </h2>
        <span className="ml-auto text-[10px] text-[#555568]">10 weeks</span>
      </header>

      <figure className="flex gap-1 m-0">
        {WEEKS.map((week, wi) => (
          <span key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <motion.span
                key={di}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.005 }}
                className="w-3 h-3 rounded-sm block"
                style={{ backgroundColor: colors[level] }}
              />
            ))}
          </span>
        ))}
      </figure>
    </motion.article>
  )
}
