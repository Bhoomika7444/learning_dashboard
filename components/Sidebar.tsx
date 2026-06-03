'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  Bell,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard',     id: 'dashboard'     },
  { icon: BookOpen,        label: 'Courses',       id: 'courses'       },
  { icon: BarChart2,       label: 'Progress',      id: 'progress'      },
  { icon: Bell,            label: 'Notifications', id: 'notifications' },
  { icon: Settings,        label: 'Settings',      id: 'settings'      },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 216 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-screen shrink-0 overflow-hidden"
      style={{
        minWidth: collapsed ? 64 : 216,
        background: '#13131a',
        borderRight: '1px solid #1e1e2a',
      }}
    >
      {/* logo */}
      <header className="flex items-center gap-3 px-4 py-5 mb-2">
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #7c6af7, #4ecdc4)' }}
        >
          <GraduationCap size={15} color="white" />
        </span>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-bold text-[#e2e2e8] whitespace-nowrap"
            >
              LearnFlow
            </motion.span>
          )}
        </AnimatePresence>
      </header>

      {/* nav links */}
      <nav className="flex-1 px-2 flex flex-col gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: '#7c6af715', border: '1px solid #7c6af730' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={17}
                className="relative shrink-0"
                color={isActive ? '#7c6af7' : '#555568'}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="relative text-sm whitespace-nowrap"
                    style={{
                      color: isActive ? '#e2e2e8' : '#555568',
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </nav>

      {/* collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-2 mb-4 flex items-center justify-center p-2 rounded-lg transition-colors"
        style={{ border: '1px solid #1e1e2a', color: '#555568' }}
      >
        {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
      </button>
    </motion.aside>
  )
}
