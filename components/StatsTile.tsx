'use client'

import { motion } from 'framer-motion'
import { Clock, Star } from 'lucide-react'

export default function StatsTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl p-5 overflow-hidden"
      style={{ background: '#13131a', border: '1px solid #1e1e2a' }}
    >
      <h2 className="text-xs font-semibold text-[#555568] uppercase tracking-wider mb-4">
        This Week
      </h2>

      <ul className="flex flex-col gap-3 list-none">
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-[#888899]">
            <Clock size={13} color="#7c6af7" />
            Study time
          </span>
          <span className="text-sm font-semibold text-[#e2e2e8]">6.5h</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-[#888899]">
            <Star size={13} color="#fbbf24" />
            Lessons done
          </span>
          <span className="text-sm font-semibold text-[#e2e2e8]">14</span>
        </li>
      </ul>
    </motion.article>
  )
}
