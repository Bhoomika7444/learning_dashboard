'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface Props {
  value: number
  color?: string
}

export default function ProgressBar({ value, color = '#7c6af7' }: Props) {
  const progress = useMotionValue(0)
  const width = useTransform(progress, [0, 100], ['0%', '100%'])
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const controls = animate(progress, value, {
      duration: 1.2,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    })

    return () => controls.stop()
  }, [value, progress])

  return (
    <figure className="w-full h-1.5 rounded-full overflow-hidden m-0" style={{ background: '#1e1e2a' }}>
      <motion.span
        style={{ width, backgroundColor: color }}
        className="block h-full rounded-full"
      />
    </figure>
  )
}
