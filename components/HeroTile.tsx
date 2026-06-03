'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      whileHover={{ scale: 1.01 }}
      style={{ background: '#13131a', border: '1px solid #1e1e2a' }}
      className="relative rounded-2xl p-6 overflow-hidden cursor-default"
    >
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 15% 50%, rgba(124,106,247,0.08) 0%, transparent 60%)',
        }}
      />

      <header className="relative flex items-start justify-between mb-5">
        <section>
          <p className="text-xs text-[#555568] mb-1">Good morning 👋</p>
          <h1 className="text-2xl font-bold text-[#e2e2e8]">Welcome back, Alex</h1>
          <p className="text-sm text-[#888899] mt-1.5">
            You have <span className="text-[#7c6af7] font-medium">3 lessons</span> due today.
          </p>
        </section>

        <figure className="flex flex-col items-center gap-1 shrink-0 ml-4">
          <span
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
            style={{ background: '#fbbf2412', border: '1px solid #fbbf2430' }}
          >
            <Flame size={17} color="#fbbf24" />
            <span className="text-base font-bold text-[#fbbf24]">12</span>
          </span>
          <figcaption className="text-[10px] text-[#555568]">day streak</figcaption>
        </figure>
      </header>

      <footer className="relative flex items-center gap-3">
        <span
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-[#888899]"
          style={{ background: '#1e1e2a', border: '1px solid #2a2a3a' }}
        >
          <Trophy size={13} color="#fbbf24" />
          Top 10% this week
        </span>
        <span className="text-xs text-[#555568]">2,340 XP earned</span>
      </footer>
    </motion.article>
  )
}