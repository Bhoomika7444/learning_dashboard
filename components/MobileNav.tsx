'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart2, Bell, Settings } from 'lucide-react'

const items = [
  { icon: LayoutDashboard, label: 'Home',     id: 'dashboard' },
  { icon: BookOpen,        label: 'Courses',  id: 'courses'   },
  { icon: BarChart2,       label: 'Progress', id: 'progress'  },
  { icon: Bell,            label: 'Alerts',   id: 'alerts'    },
  { icon: Settings,        label: 'Settings', id: 'settings'  },
]

export default function MobileNav() {
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2"
      style={{ background: '#13131a', borderTop: '1px solid #1e1e2a' }}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeId === item.id
        return (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className="relative flex flex-col items-center gap-0.5 px-3 py-1.5"
          >
            {isActive && (
              <motion.span
                layoutId="mobile-nav-highlight"
                className="absolute inset-0 rounded-xl"
                style={{ background: '#7c6af715', border: '1px solid #7c6af730' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              size={19}
              color={isActive ? '#7c6af7' : '#555568'}
              className="relative"
            />
            <span
              className="relative text-[10px]"
              style={{ color: isActive ? '#7c6af7' : '#555568' }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
